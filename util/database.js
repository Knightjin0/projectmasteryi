const uri = 'mongodb+srv://admin:qwer1234@admin.oz347jq.mongodb.net/'
const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default client;