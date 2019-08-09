import url from 'url';
import { MongoClient, ObjectId } from 'mongodb';

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

async function getAllArticles() {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const articles = await db.collection('articles');

  const modifiedArticles = await articles
    .aggregate([
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'id',
          as: 'articles'
        }
      },
      {
        $addFields: {
          id: '$_id'
          // 'meta.href': '$_id'
        }
      },
      {
        $project: {
          meta: true,
          id: true,
          _id: false
        }
      }
    ])
    .toArray()
    .then(response => {
      // this step is unnecessary if we aggregate the db query with $replaceRoot
      return response.map(data => {
        const { meta, id } = data;
        return { ...meta, id };
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
    .aggregate([
      {
        $lookup: {
          from: 'games',
          localField: '_id',
          foreignField: 'id',
          as: 'games'
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
          id: true,
          _id: false
        }
      }
    ])
    .toArray()
    .then(response => {
      // this step is unnecessary if we aggregate the db query with $replaceRoot
      return response.map(data => {
        const { meta, id } = data;
        return { ...meta, id };
      });
    })
    .catch(err => {
      console.log('db error - ', err);
      console.error(`Failed to find documents: ${err}`);

      return {};
    });

  return modifiedGames;
}

async function getArticleById(id) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const articles = await db.collection('articles');

  const data = await articles.findOne({ _id: ObjectId(id) }).catch(err => {
    console.log('db error - ', err);
    console.error(`Failed to find document: ${err}`);

    return {};
  });

  return data;
}

async function getGameById(id) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const games = await db.collection('games');

  const data = await games.findOne({ _id: ObjectId(id) }).catch(err => {
    console.log('db error - ', err);
    console.error(`Failed to find document: ${err}`);

    return {};
  });

  return data;
}

module.exports = {
  getAllArticles,
  getAllGames,
  getArticleById,
  getGameById
};
