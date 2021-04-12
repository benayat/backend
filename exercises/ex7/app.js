const fs = require('fs');
const request = require('request');
const fetch = require('node-fetch');

const axios = require('axios');
var parseString = require('xml2js').parseString;

const fetchData = async (url, type) => {
  switch (type) {
    case 'axios': {
      const data = await axios.get(url);
      const dataObject = JSON.parse(data);
      console.log(dataObject);
    }
    case 'request': {
      request(url, function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body);
      });
      break;
    }
    case 'fetch': {
      fetch(url)
        .then((res) => res.text())
        .then((body) => console.log(body))
        .catch((error) => {
          console.log('not working');
        });
      break;
    }
    default:
      break;
  }
};
fetchData(
  'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15',
  'fetch'
);
