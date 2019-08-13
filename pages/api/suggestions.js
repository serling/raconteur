import { getSuggestionsPage } from '../../js/db-helper';

const errorObject = {
  statusCode: 404,
  title: 'Could not find suggestions page'
};

export default async (req, res) => {
  await getSuggestionsPage()
    .then(response => {
      res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.log('error in suggestions page', err);

      res.status(404).json({ error: errorObject });
    });
};
