const https = require('https');

const key = 'apikey=448300e9-3b53-4adf-b7a3-d901026964f7&';
const baseURL = 'https://api.harvardartmuseums.org/object?';
const ending = 'color=%23afaf4b';

const request = https.request(baseURL + key + ending, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });
  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});
request.on('error', (error) => {
  console.log('an error', error);
});

request.end();
