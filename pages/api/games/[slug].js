import { getGameBySlug } from '../../../js/db-helper';

const errorObject = {
  statusCode: 404,
  title: 'Could not find game -- or something'
};

export default async (req, res) => {
  const { query } = req;

  await getGameBySlug(query.slug)
    .then(response => {
      res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.log('error in games', err);

      res.status(404).json({ error: errorObject });
    });
};
