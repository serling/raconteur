import { getWordsByType } from '../../js/db-helper';

const errorObject = {
  statusCode: 404,
  title: 'Could not find word -- or something'
};

const typeErrorObject = {
  statusCode: 404,
  title: 'Not valid word type.'
};

const validTypes = {
  professions: 'professions',
  emotions: 'emotions',
  names: 'names',
  agendas: 'agendas'
};

export default async (req, res) => {
  const { query } = req;

  if (!validTypes[query.type]) {
    return res.status(404).json({ error: typeErrorObject });
  }

  await getWordsByType(query.type)
    .then(response => {
      return res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.log('error in articles', err);

      return res.status(404).json({ error: errorObject });
    });
};
