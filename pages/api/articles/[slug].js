import { client } from '../../../client';

const errorObject = {
  statusCode: 404,
  title: 'Could not find article -- or something'
};

export default async (req, res) => {
  const { query } = req;

  await client
    .fetch(
      `*
      [_type == "article" && slug.current == "${query.slug}"] 
      {
        "id": _id, 
        title, 
        abstract,
        "image": mainImage,
        "pageTitle": title, 
        categories[]->
        {
          title, 
          "slug": slug.current
        }, 
        type, 
        body[]{
          ...,
          markDefs[]
          {
            ...,
            _type == "suggestion" => {
              "category": category[0]->title
            }
          }
        }, 
        relatedArticles[]->
          {
            "id": _id, 
            title, 
            "image": mainImage,
            abstract,
            "slug": slug.current, 
            categories[]->{
              title, 
              "slug": slug.current
            }, 
            type
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
