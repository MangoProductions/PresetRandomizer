import React from 'react';
import Matka from './components/Matka';
import Matkalista from './components/Matkalista';
import Matkalomake from './components/Matkalomake';


function MatkaApp() {
    return (
        <div>
            { /* MatkaApp on sovelluksen käynnistävä komponentti 
            <Matka matka = { matka }/>
             <Matkalista matkat={mat} />
            */ }
            <Matkalomake />
            Byrokraatti toimii kai

        </div>
    );
}

export default MatkaApp;