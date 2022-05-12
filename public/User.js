import React, { useState, useEffect } from 'react';

function User () {

	const [id, setId] = useState(5);
	const [name, setName] = useState('');
	const [user, setUser] = useState('');
	const [city, setCity] = useState('');
	const [teksti, setTeksti] = useState('Haetaan');

	// Tänne tulee parametrina, millä id:llä haetaan
	const hae = async (id) => {
		try {
			let url = 'https://jsonplaceholder.typicode.com/users/' + id;
			const response = await fetch(url);

			const json = await response.json();
			setName(json.name);
			setUser(json.username)
			setCity(json.address.city)
		} catch (error) {
			setTeksti('Haku ei onnistunut');
		}
	}

	// Esimerkkinä, kun haettavan id ei ole kovakoodattu
	// [id], koska useEffectin käyttämä funktio tarvitsee sen
	// eli id:n muutos käynnistää toiminnon
	useEffect(() => {
		hae(id);
	}, [id]);

	if (name.length === 0) {
		return(
			<div>
				{ teksti }
			</div>
		);
	}

	return (
		<div>
			Nimi: { name }<br />
			Käyttäjä: { user }<br />
			Kaupunki: { city }
		</div>
	);
}
export default User;
