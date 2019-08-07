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

  const collection = await db.collection('articles');

  const data = await collection
    .find({})
    .toArray()
    .then(items => {
      console.log(`Successfully found ${items.length} documents.`);
      items.forEach(console.log);
      return items;
    })
    .catch(err => console.error(`Failed to find documents: ${err}`));

  return data;
}

async function getArticleById(id) {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = await db.collection('articles');

  const data = await collection.findOne({ _id: ObjectId(id) }).catch(err => {
    console.log('db error - ', err);
    console.error(`Failed to find document: ${err}`);
    return {};
  });

  return data;
}

module.exports = {
  getAllArticles,
  getArticleById
};
