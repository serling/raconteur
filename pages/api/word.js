import { client } from '../../client';

const errorObject = {
  statusCode: 404,
  title: 'Could not find word -- or something'
};

const typeErrorObject = {
  statusCode: 404,
  title: 'Not valid word type.'
};

const validTypes = {
  profession: 'profession',
  emotion: 'emotion',
  name: 'name',
  need: 'need',
  quirk: 'quirk'
};

export default async (req, res) => {
  const { query } = req;

  if (!validTypes[query.type]) {
    return res.status(404).json({ error: typeErrorObject });
  }

  await client
    .fetch(
      `*
    [_type == "word" && "${query.type}" in categories] 
    {
      "id": _id, 
      title,
      categories
    }`
    )
    .then(response => {
      console.log('WORDSANITY: ', response);
      res.status(200).json({ success: true, payload: response });
    })
    .catch(err => {
      console.error('Oh no, error occured: ', err);
      res.status(404).json({ error: errorObject });
    });
};
