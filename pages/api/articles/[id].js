import { getArticleById } from '../../../js/db-helper';

export default async (req, res) => {
  console.log('***opening dynamic page***');
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
      res.status(404).json({ error: errorObject });
    });
};
