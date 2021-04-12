const fs = require('fs');
// const stringJSON = JSON.stringify({
//   name: 'Isca',
//   planet: 'Earth',
//   age: '32',
// });

// fs.writeFileSync('data.json', stringJSON);

const dataBuffer = fs.readFileSync('data.json').toString();

dataObject = JSON.parse(dataBuffer);
dataObject.name = 'moss';
dataObject.age = '333';

fs.writeFileSync('data.json', JSON.stringify(dataObject));
