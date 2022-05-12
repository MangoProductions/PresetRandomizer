import React from 'react';
import Speclist from './components/speclist';
import Specificationfillable from './components/specifications';
import Speclisting from './components/speclist';
import Spec from './components/specifications';

function SynthSpecApp() {
    return (
        <><div>
            {/*Halvan(Alle Tonnin) Syntetisaattorin keskimääräinen elinkaari on 8 vuotta parhaimmillaan.*/}
            {/* Minulla on ollut syntikka omistuksessa kohta 2 vuotta ja olen tehnyt presettejä siihen, joista olen ylpeä.*/}
            {/*Haluaisin laittaa muistiin nämä presetit, jotta voin ne ohjelmoida seuraavaan syntetisaattoriin kun nykyisen aika on ohi. */}
            <Specificationfillable /><br />

        </div><div><br />
                Byrokraatti toimii kai
                {/*Komponentin nimi, propsin nimi, mitä propsiin laitetaan */}
                <Speclisting speclisting={Spec} />
            </div></>
    );
}

export default SynthSpecApp;