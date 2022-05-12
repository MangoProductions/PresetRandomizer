import React, { useState, useEffect } from 'react';




function Listaus42(props) {





        const [name, setName] = useState('');
        const [username, setUsername] = useState('');
        const [city, setCity] = useState('');
        const fetchUrl = async () => {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
        const json = await response.json();
        setName(json.name);
        setUsername(json.username);
        setCity(json.address.city);
        } catch (error) {
        setName('Joonas'); setUsername('Byrokraatti'); setCity('Kuu')
        }
        }
        useEffect( () => { fetchUrl() }, [] );
        return ( <div><p>Nimi: { name }<br />Käyttäjä:{ username }<br />Kaupunki:{ city } </p></div> );
        
}

export default Listaus42;
