import { getArticleById } from '../../../js/db-helper';

export default async (req, res) => {
  const { query } = req;

  const errorObject = {
    statusCode: 404,
    title: 'Could not find article -- or something'
  };

  await getArticleById(query.id)
    .then(response => {
      res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.log('error in articles', err);

      res.status(404).json({ error: errorObject });
    });
};
