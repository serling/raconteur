import { getAllGames, getGamesByCategoryId } from '../../js/db-helper';

const errorObject = {
  statusCode: 404,
  title: 'Could not find games'
};

export default async (req, res) => {
  const { query } = req;

  if (query.category) {
    var result = getGamesByCategoryId(query.category);
  } else {
    var result = getAllGames();
  };

  await result
    .then(response => {
      res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.log('error in articles', err);

      res.status(404).json({ error: errorObject });
    });
    
};
