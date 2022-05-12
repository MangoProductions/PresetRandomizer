import React from 'react';
import Listaus42 from './components/tehtava42lista';


const fetchUrl = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
      const json = await response.json();

        
    } catch (error) {
      console.log(error); 
    }    }
function Tehtava42App() {
    return (
        <div>
                {/*Komponentin nimi, propsin nimi, mitä propsiin laitetaan */}
            <Listaus42 listaus42 ={ fetchUrl }/>
            Byrokraatti toimii kai

        </div>
    );
}

export default Tehtava42App;