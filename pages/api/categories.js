import { getGamesByCategoryId } from '../../js/db-helper';

const errorObject = {
  statusCode: 404,
  title: 'Could not find word -- or something'
};

export default async (req, res) => {
  const { query } = req;

  console.log("QUERY CATEGORIES", query);

  await getGamesByCategoryId(query.category)
    .then(response => {
      return res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.log('error in articles', err);

      return res.status(404).json({ error: errorObject });
    });
};
