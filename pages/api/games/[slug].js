import { client } from '../../../client';

const errorObject = {
  statusCode: 404,
  title: 'Could not find game -- or something'
};

export default async (req, res) => {
  const { query } = req;

  await client
    .fetch(
      `*
    [_type == "game" && slug.current == "${query.slug}"] 
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
      body, 
      relatedGames[]->
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

  // await getGameBySlug(query.slug)
  //   .then(response => {
  //     res.status(200).json({ success: true, payload: response });
  //   })
  //   .catch(err => {
  //     console.log('error in games', err);

  //     res.status(404).json({ error: errorObject });
  //   });
};
