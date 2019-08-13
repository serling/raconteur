import { getFrontPage } from '../../js/db-helper';

const errorObject = {
  statusCode: 404,
  title: 'Could not find front page'
};

export default async (req, res) => {
  await getFrontPage()
    .then(response => {
      res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.log('error in front page', err);

      res.status(404).json({ error: errorObject });
    });
};
