import React from 'react';

function Matka(props) {
    return (
        <p>
            Otsikko:  { props.matka.otsikko } <br />
            Paikka: { props.matka.paikka } <br />
            Päivä:  { props.matka.paiva } <br />
            Sää: { props.matka.saa } <br />
            Kuvaus: { props.matka.kuvaus  } 
        </p>
    );

}
export default Matka;