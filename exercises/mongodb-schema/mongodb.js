const mongodb = require('mongodb');
const validator = require('validator');
const { MongoClient, ObjectID } = mongodb;
const fs = require('fs');
const profilePicture = fs.readFileSync(
  './img/WhatsApp Image 2020-11-30 at 16.56.19.jpeg',
  { encoding: 'base64' }
);
const profilePictureMos = fs.readFileSync('./img/IMG_20200401_120216.jpg', {
  encoding: 'base64',
});
const ids = {
  attachments: {
    profilePicture: 1,
    profilePictureMos: 2,
  },
  users: {
    Benaya: 3,
    mos: 4,
  },
  comments: {
    first: 5,
    second: 6,
  },
  posts: {
    BenayaFirst: 7,
    MosFirst: 8,
  },
};

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'appleBook';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }
    console.log('success connecting!');

    const db = client.db(databaseName);
    // db.createCollection('users', {
    //   validator: {
    //     $jsonSchema: {
    //       bsonType: 'object',
    //       required: ['_id', 'name', 'email', 'profilePicture'],
    //       properties: {
    //         _id: {
    //           bsonType: ObjectID,
    //           description: 'must be an ObjectID and required',
    //         },
    //         email: {
    //           bsonType: 'string',
    //           description:
    //             'must be a string and match the regular expression pattern',
    //         },
    //         profilePicture: {
    //           bsonType: ObjectID,
    //           description: 'can only be ObjectID',
    //         },
    //       },
    //     },
    //   },
    //   validationAction: 'warn',
    // });

    db.collection('users').insertMany(
      [
        {
          _id: ids.users.Benaya,
          name: 'Benaya',
          email: 'benaya@gmail.com',
          profilePicture: ids.attachments.profilePicture,
          likes: [],
        },
        {
          _id: ids.users.mos,
          name: 'mos',
          email: 'mos@gmail.com',
          profilePicture: ids.attachments.profilePictureMos,
          likes: [],
        },
      ],
      (error, result) => {
        if (error) {
          console.log(error);
        }
        console.log(result.ops);
      }
    );
    db.collection('attachments').insertMany(
      [
        {
          _id: ids.attachments.profilePicture,
          type: 'image',
          file: profilePicture,
          users: [ids.users.Benaya],
        },
        {
          _id: ids.attachments.profilePictureMos,
          type: 'image',
          file: profilePictureMos,
          users: [ids.users.mos],
        },
      ],
      (error, result) => {
        if (error) {
          console.log(error);
        }
        console.log(result.ops);
      }
    );
    db.collection('comments').insertMany([
      {
        _id: ids.comments.first,
        text: 'first comment',
        time: new Date(),
        user: ids.users.mos,
      },
      {
        _id: ids.comments.second,
        text: 'second comment',
        time: new Date(),
        user: ids.users.Benaya,
      },
    ]);
    db.collection('posts').insertMany([
      {
        _id: ids.posts.BenayaFirst,
        headline: 'first post ever!',
        publishDate: new Date(),
        user: ids.users.Benaya,
        content: 'post content',
        attachments: ids.attachments.profilePicture,
      },
      {
        _id: ids.posts.MosFirst,
        headline: 'mos first post',
        publishDate: new Date(),
        user: ids.users.mos,
        content: 'second post content',
        attachments: ids.attachments.profilePictureMos,
      },
    ]);

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
