import React from 'react';
import Listaus32 from './components/tehtava32lista';
const tiedot = [
{
id: 1, 
nimi: "Virtanen Matti",
alkupaiva: "2021-06-01",
 loppupaiva: "2021-06-30",
},
{         
id: 2, 
nimi: "Laaksonen Lisaa",
alkupaiva: "2021-06-26",
loppupaiva: "2021-07-27",
},
{
id: 3, 
nimi: "Korhonen Maija",
alkupaiva: "2021-08-03",
loppupaiva: "2021-08-30",
},
];

function Tehtava32App() {

    return (
        <div>
                {/*Komponentin nimi, propsin nimi, mitä propsiin laitetaan */}
            <Listaus32 listaus32 ={ tiedot }/>
            Byrokraatti toimii kai

        </div>
    );
}

export default Tehtava32App;