import { client } from '../../client';

const errorObject = {
  statusCode: 404,
  title: 'Could not find games'
};

export default async (req, res) => {
  const { query } = req;

  await client
    .fetch(
      `*
    [_type == "game"] 
    {
      "id": _id, 
      title, 
      "slug": slug.current,
      abstract,
      "pageTitle": title, 
      categories[]->
      {
        title, 
        "slug": slug.current
      }
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

  // if (query.category) {
  //   const categoryIds = query.category.split(',');

  //   var result = getGamesByCategoryIds(categoryIds);
  // } else {
  //   var result = getAllGames();
  // }

  // await result
  //   .then(response => {
  //     res.status(200).json({ success: true, payload: response });
  //   })
  //   .catch(err => {
  //     console.log('error in articles', err);

  //     res.status(404).json({ error: errorObject });
  //   });
};
