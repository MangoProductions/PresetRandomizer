import React, { useState, useEffect } from 'react';
import Speclisting from './speclist';
function Specificationfillable (props) {
    const [Spec, setValues] = useState(
        {
            name: '',
          arpseqrate: '',
          arpseqgate: '',
          argseqoct: '',
          argseqpat:'',
          argseqstl: '',
          lfo1wave: '',
          lfo2wave: '',
          lfo1delay: '',
          lfo2delay: '',          
          lfo1rate: '',
          lfo2rate: '',
          osc1wave: '',
          osc1ptchmod: '',
          osc1pwm: '',
          osc2ptchmod: '',
          osc2tonemod: '',
          osc2ptch: '',
          osc2lvl: '',
          osc2sync: '',
          noiselvl: '',
          oct: '',
        }
  )
;

  const [viesti, setViesti] = useState('Täytä kaikki kentät');

  const lisaa = (e) => {
    e.preventDefault();
    setValues(
      {  
          name: '',
        arpseqrate: '',
        arpseqgate: '',
        argseqoct: '',
        argseqpat:'',
        argseqstl: '',
        lfo1wave: '',
        lfo2wave: '',
        lfo1delay: '',
        lfo2delay: '',          
        lfo1rate: '',
        lfo2rate: '',
        osc1wave: '',
        osc1ptchmod: '',
        osc1pwm: '',
        osc2ptchmod: '',
        osc2tonemod: '',
        osc2ptch: '',
        osc2lvl: '',
        osc2sync: '',
        noiselvl: '',
        oct: '',
      }
    );
    setViesti('Tallennettiin');
  }

  const nayta = (e) => {
    e.preventDefault();
  }

  const muutaSuurella = (e) => {
    setValues( 
      {
      ...Spec,
      [e.target.name] : e.target.value.toUpperCase()
      }
    )
    setViesti('');
  }

  const muuta = (e) => {
    setValues( 
      {
      ...Spec,
      [e.target.name] : e.target.value
      }
    )
    setViesti('');
  }



  return (/*Tämä aihevalinta oli virhe sen takia, että kuinka paljon pitää kirjoittaa*/
    <div>
      <form>
          <label htmlFor='name'>Name of the Original Synthesizer </label>
          <input type='text' name='name' value={ Spec.name } onChange={ (e) => muutaSuurella(e) } /><br />
          <label htmlFor='arpseqrate'>Sequencer Rate </label>
          <input type='number' name='arpseqrate' value={ Spec.arpseqrate} onChange={ (e) => muuta(e) } /><br />
          <label htmlFor='arpseqgate'> Sequencer Gate </label>
          <input type='number' name='arpseqgate' value={  Spec.arpseqgate} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='argseqoct'> Sequencer Octave</label>
          <input type='number' name='argseqoct' value={  Spec.argseqoct} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='argseqpat'> Sequencer Pattern </label>
          <input type='number' name='argseqpat' value={  Spec.argseqpat} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='argseqstl'> Sequencer Style </label>
          <input type='text' name='argseqstl' value={  Spec.argseqstl} onChange={ (e) => muuta(e)  } /> <br />
          <label htmlFor='lfo1wave'> LFO 1 Wavetype</label>
          <input type='text' name='lfo1wave' value={  Spec.lfo1wave} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='lfo1delay'> LFO 1 Delay</label>
          <input type='number' name='lfo1delay' value={  Spec.lfo1delay} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='lfo1rate'> LFO 1 Rate</label>
          <input type='number' name='lfo1rate' value={  Spec.lfo1rate} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='lfo2wave'> LFO 2 Wavetype </label>
          <input type='text' name='lfo2wave' value={  Spec.lfo2wave} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='lfo2delay'> LFO 2 Delay</label>
          <input type='number' name='lfo2delay' value={  Spec.lfo2delay} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='lfo2rate'> LFO 2 Rate </label>
          <input type='number' name='lfo2rate' value={  Spec.lfo2rate} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='osc1wave'> OSC 1 Wavetype</label>
          <input type='text' name='osc1wave' value={  Spec.osc1wave} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='osc1ptchmod'> OSC 1 Pitch Modulation</label>
          <input type='number' name='osc1ptchmod' value={  Spec.osc1ptchmod} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='osc1pwm'> OSC 1 PWM </label>
          <input type='number' name='osc1pwm' value={  Spec.osc1pwm} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='osc2ptchmod'> OSC 2 Pitch modulation </label>
          <input type='number' name='osc2ptchmod' value={  Spec.osc2ptchmod} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='osc2tonemod'> OSC 2 Tone mod </label>
          <input type='number' name='osc2tonemod' value={  Spec.osc2tonemod} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='osc2ptch'> OSC 2 Pitch </label>
          <input type='number' name='osc2ptch' value={  Spec.osc2ptch} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='osc2lvl'> OSC 2 Level </label>
          <input type='number' name='osc2lvl' value={  Spec.osc2lvl} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='osc2sync'> OSC 2 Sync </label>
          <input type='text' name='osc2sync' value={  Spec.osc2sync} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='noiselvl'> Noise Level </label>
          <input type='number' name='noiselvl' value={  Spec.noiselvl} onChange={ (e) => muuta(e)  } /><br />
          <label htmlFor='oct'> Octave </label>
          <input type='number' name='oct' value={  Spec.oct} onChange={ (e) => muuta(e)  } /><br />
         
          <input type='submit' value='Lisää' onClick={ (e) => lisaa(e) } />
      </form>
      <p>{viesti}</p>
    </div>
  );
}

export default Specificationfillable;