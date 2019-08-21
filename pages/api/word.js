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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default async (req, res) => {
  const { query } = req;

  if (!validTypes[query.type]) {
    return res.status(404).json({ error: typeErrorObject });
  }

  await client
    .fetch(
      `*
    [_type == "wordCategory" && title == "${query.type}"] 
    {
      title,
      "numberOfWords": count(words),
      words[] 
    }`
    )
    .then(response => {
      const { title, words, numberOfWords } = response[0];

      res
        .status(200)
        .json({
          success: true,
          payload: { word: words[getRandomInt(numberOfWords)] }
        });
    })
    .catch(err => {
      console.error('Oh no, error occured: ', err);
      res.status(404).json({ error: errorObject });
    });
};
