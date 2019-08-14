import url from 'url';
import { MongoClient } from 'mongodb';

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

const queryAllOfType = type => {
  return [
    {
      $lookup: {
        from: type,
        localField: 'id',
        foreignField: 'id',
        as: type
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

const queryFrontPage = () => {
  return [
    {
      $match: {
        slug: 'home'
      }
    },
    {
      $lookup: {
        from: 'articles',
        as: 'articles',
        pipeline: [
          { $limit: 5 }
        ]
      }
    },
    {
      $project: {
        pageTitle: true,
        title: true,
        _id: false,
        articles: {
          $map: {
            input: '$articles',
            as: 'article',
            in: { $mergeObjects : ['$$article.meta', '$$article'] }
          }
        }
      }
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [ { articles: "$articles" }, "$$ROOT" ] } }
    }
  ]
}

const querySuggestionsPage = () => {
  return [
    {
      $match: {
        slug: 'suggestions'
      }
    }
  ]
}


async function getAllArticles() {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const articles = await db.collection('articles');

  const modifiedArticles = await articles
    .aggregate(queryAllOfType('articles'))
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
    .aggregate(queryAllOfType('games'))
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

async function getArticleBySlug(slug) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const articles = await db.collection('articles');

  const data = await articles.findOne({ slug }).catch(err => {
    console.log('db error - ', err);
    console.error(`Failed to find document: ${err}`);

    return {};
  });

  return data;
}

async function getGameBySlug(slug) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const games = await db.collection('games');

  const data = await games.findOne({ slug }).catch(err => {
    console.log('db error - ', err);
    console.error(`Failed to find document: ${err}`);

    return {};
  });

  return data;
}

async function getFrontPage() {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const pages = await db.collection('pages');

  const frontPage = await pages
    .aggregate(queryFrontPage())
    .toArray();

    
  const data = frontPage[0];

  return data;
}

async function getSuggestionsPage() {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const pages = await db.collection('pages');

  const suggestionsPage = await pages
    .aggregate(querySuggestionsPage())
    .toArray();

    
  const data = suggestionsPage[0];
    
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
          localField: 'wordId',
          foreignField: 'wordId',
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
      return response.map(dataObject => {
        // pick one random from the whole set of a type
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
  getArticleBySlug,
  getGameBySlug,
  getWordsByType,
  getFrontPage,
  getSuggestionsPage
};
