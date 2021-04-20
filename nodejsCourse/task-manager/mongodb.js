const mongodb = require('mongodb');
const { MongoClient, ObjectID } = mongodb;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }
    console.log('success connecting!');

    const db = client.db(databaseName);
    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Clean the house',
    //       completed: true,
    //     },
    //     {
    //       description: 'Renew inspection',
    //       completed: false,
    //     },
    //     {
    //       description: 'Pot plants',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to start tasks!');
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
