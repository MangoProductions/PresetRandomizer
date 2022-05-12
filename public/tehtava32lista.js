import React from 'react';

function Listaus32(props) {




    return (
        <div>
        { 
           props.listaus32.map(tiedot => {
            return (
               <p key={tiedot.id}>
               Nimi: { tiedot.nimi }<br />
               Alkaa: { tiedot.alkupaiva }<br />
               Päättyy: { tiedot.loppupaiva }<br />
          </p>
            )
          })
       }
       </div>
    )
}

export default Listaus32;
