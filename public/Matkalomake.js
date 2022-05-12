import React, { useState } from 'react';
import Matkalista from './Matkalista';
function Matkalomake () {

  const [matka, setMatka] = useState(
    {
      otsikko: '',
      paikka: '',
      paiva: '',
      saa: '',
      kuvaus: '',
    }
  );

  const [viesti, setViesti] = useState('Täytä kaikki kentät');

  const lisaa = (e) => {
    e.preventDefault();
    setMatka(
      {  
        otsikko: '',
        paikka: '',
        paiva: '',
        saa: '',
        kuvaus: '',
      }
    );
    setViesti('Tallennettiin');
  }

  const nayta = (e) => {
    e.preventDefault();
  }

  const muutaSuurella = (e) => {
    setMatka( 
      {
      ...matka,
      [e.target.name] : e.target.value.toUpperCase()
      }
    )
    setViesti('');
  }

  const muuta = (e) => {
    setMatka( 
      {
      ...matka,
      [e.target.name] : e.target.value
      }
    )
    setViesti('');
  }

  return (
    <div>
      <form>
          <label htmlFor='otsikko'>Otsikko </label>
          <input type='text' name='otsikko' value={ matka.otsikko } onChange={ (e) => muutaSuurella(e) } /><br />
          <label htmlFor='paikka'>Paikka </label>
          <input type='text' name='paikka' value={ matka.paikka} onChange={ (e) => muuta(e) } /><br />
          <label htmlFor='paiva'>Päivä </label>
          <input type='text' name='paiva' value={  matka.paiva} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='saa'>Sää </label>
          <input type='text' name='saa' value={  matka.saa} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='kuvaus'>Kuvaus </label>
          <input type='text' name='kuvaus' value={ matka.kuvaus } onChange={ (e) => muuta(e) } /><br />
          <input type='submit' value='Lisää' onClick={ (e) => lisaa(e) } />
      </form>
      <p>{viesti}</p>
    </div>
  );
}

export default Matkalomake;
