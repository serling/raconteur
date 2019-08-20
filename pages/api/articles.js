import { client } from '../../client';

const errorObject = {
  statusCode: 404,
  title: 'Could not find articles'
};

export default async (req, res) => {
  await client
    .fetch(
      `*
      [_type == "article"] 
      {
        "id": _id, 
        title, 
        "image": mainImage,
        "slug": slug.current,
        abstract,
        categories[]->
        {
          title, 
          "slug": slug.current
        },
        abstract,
        type
      }`
    )
    .then(response => {
      console.log('GAMESANITY: ', response);
      res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.error('Oh no, error occured: ', err);
      res.status(404).json({ error: errorObject });
    });
};
