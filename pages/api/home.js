import { client } from '../../client';

const errorObject = {
  statusCode: 404,
  title: 'Could not find front page'
};

// https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js
// https://zeit.co/guides/deploying-sanity-studio-with-now

export default async (req, res) => {
  await client
    .fetch(
      `*
      [_type == "page" && title == "Home"] 
      {
        "slug": slug.current, 
        "pageTitle": title, 
        title, 
        topArticles[]->
        {
          "id": _id, 
          title, 
          "image": mainImage, 
          "slug": slug.current, 
          categories[]->
          {
            title, 
            "slug": slug.current
          }, 
          type, 
          abstract
        }
      }
    [0]`
    )
    .then(response => {
      res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.error('Oh no, error occured: ', err);
      res.status(404).json({ error: errorObject });
    });
};
