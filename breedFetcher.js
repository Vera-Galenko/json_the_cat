const request = require('request');


const fetchBreedDescription = function(breed, callback) {

    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      } else {
        let data = JSON.parse(body);
        if (data.length === 0 || response.statusCode > 300) {
          callback(`No information for ${breed} found.`, null);
        } else {
            callback(null, data);
        }
      }
    });
  };

module.exports = fetchBreedDescription;