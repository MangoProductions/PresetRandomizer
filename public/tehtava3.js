 const fetch = require('node-fetch');
 
 const fetchUrl = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
      const json = await response.json();
	  
      console.log('Nimi: ' + json.name);
      console.log('Käyttäjä: ' + json.username);
      console.log('Kaupunki: ' + json.address.city);
    } catch (error) {
      console.log(error); 
    }
  }

fetchUrl();

