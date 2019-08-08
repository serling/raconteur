import { getAllArticles } from '../../js/db-helper';

const errorObject = {
  statusCode: 404,
  title: 'Could not find articles'
};

export default async (req, res) => {
  await getAllArticles()
    .then(response => {
      // console.log('got...', response);

      res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.log('error in articles', err);

      res.status(404).json({ error: errorObject });
    });
};
