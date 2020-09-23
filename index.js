const fetchBreedDescription = require('./breedFetcher');
const fs = require('fs')
const mes = process.argv.slice(2);

let breed = mes;

fetchBreedDescription(breed, function(error, content){
    if(error){
        console.log("Error", error.message);
    } else {
        console.log(content);
        fs.writeFile('index.html', content, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    }
});







