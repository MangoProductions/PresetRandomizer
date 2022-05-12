import React, { useState, useEffect } from 'react';
import Specificationfillable from './specifications';
import Spec from './specifications';
function Speclisting (props) {
    return (
      <div>
      { 
         props.speclisting.map(Spec => {

             <p key={Spec.id}>
                 Synthesizer: {Spec.name}
                  Sequencer Rate: { Spec.arpseqrate }<br />
                  Sequencer Gate: { Spec.arpseqgate }<br />
                  Sequencer Octaves: { Spec.argseqoct }<br />
                  Sequencer Pattern: { Spec.argseqpat }<br />
                  Sequencer Style: { Spec.argseqstl }<br />                  
                  LFO 1 wave type: { Spec.lfo1wave }<br />
                  LFO 1 delay: { Spec.lfo1delay }<br />
                  LFO 1 rate: { Spec.lfo1rate }<br />
                  LFO 2 wave type: { Spec.lfo2wave }<br />                  
                  LFO 2 delay: { Spec.lfo2delay }<br />
                  LFO 2 rate: { Spec.lfo2rate }<br />
                  OSC 1 wave: { Spec.osc1wave }<br />
                  OSC 1 Pitch Mod: { Spec.osc1ptchmod }<br />                  
                  OSC 1 PWM: { Spec.osc1pwm }<br />
                  OSC 2 Pitch Mod: { Spec.osc2ptchmod }<br />
                  OSC 2 Tone mod: { Spec.osc2tonemod }<br />
                  OSC 2 Pitch: { Spec.osc2ptch }<br />                  
                  OSC 2 Volume Level: { Spec.osc2lvl }<br />
                  OSC 2 Sync w/ OSC1: { Spec.osc2sync }<br />
                  Noise Level: { Spec.noiselvl }<br />                  
                  Used Octave(Optional): { Spec.oct }<br />
                
             </p>

        })
     }
     </div>
  )
}        

export default Speclisting;