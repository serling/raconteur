import url from 'url';
import { MongoClient } from 'mongodb';

import LOCAL_WORDS_DB from '../static/data/words.json';

// Create cached connection variable
let cachedDb = null;

// A function for connecting to MongoDB,
// taking a single paramater of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb;
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true });

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1));

  // Cache the database connection and return the connection
  cachedDb = db;
  return db;
}

const allOfType = type => {
  return [
    {
      $lookup: {
        from: type,
        localField: '_id',
        foreignField: 'id',
        as: type
      }
    },
    {
      $addFields: {
        id: '$_id'
      }
    },
    {
      $project: {
        meta: true,
        slug: true,
        id: true,
        _id: false
      }
    }
  ];
};

async function getAllArticles() {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const articles = await db.collection('articles');

  const modifiedArticles = await articles
    .aggregate(allOfType('articles'))
    .toArray()
    .then(response => {
      // this step is unnecessary if we aggregate the db query with $replaceRoot
      return response.map(data => {
        const { meta, id, slug } = data;
        return { ...meta, id, slug };
      });
    })
    .catch(err => {
      console.log('db error - ', err);
      console.error(`Failed to find documents: ${err}`);

      return {};
    });

  return modifiedArticles;
}

async function getAllGames() {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const games = await db.collection('games');

  const modifiedGames = await games
    .aggregate(allOfType('games'))
    .toArray()
    .then(response => {
      // this step is unnecessary if we aggregate the db query with $replaceRoot
      return response.map(data => {
        const { meta, id, slug } = data;
        return { ...meta, id, slug };
      });
    })
    .catch(err => {
      console.log('db error - ', err);
      console.error(`Failed to find documents: ${err}`);

      return {};
    });

  return modifiedGames;
}

async function getArticleById(slug) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const articles = await db.collection('articles');

  const data = await articles.findOne({ slug }).catch(err => {
    console.log('db error - ', err);
    console.error(`Failed to find document: ${err}`);

    return {};
  });

  return data;
}

async function getGameById(slug) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const games = await db.collection('games');

  const data = await games.findOne({ slug }).catch(err => {
    console.log('db error - ', err);
    console.error(`Failed to find document: ${err}`);

    return {};
  });

  return data;
}

async function getWordsByType(type) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const wordCollection = await db.collection('words');

  const singleWord = await wordCollection
    .aggregate([
      {
        $lookup: {
          from: 'words',
          localField: '_id',
          foreignField: '_id',
          as: 'words'
        }
      },
      {
        $project: {
          _id: false,
          [`${type}`]: true
        }
      }
    ])
    .toArray()
    .then(response => {
      // this step is unnecessary if we aggregate the db query with $replaceRoot
      // pick one random from the whole set of a type
      return response.map(dataObject => {
        const words = dataObject[type];

        return words[Math.floor(Math.random() * words.length)];
      });
    })
    .catch(err => {
      console.log('db error - ', err);
      console.error(`Failed to find words: ${err}`);

      return {};
    });

  return singleWord;
}

module.exports = {
  getAllArticles,
  getAllGames,
  getArticleById,
  getGameById,
  getWordsByType
};
