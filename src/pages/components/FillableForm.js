import React,{ Component, useState, useEffect } from 'react';
class FillableForm extends Component{
    
  constructor(props) {
    super(props);
    this.state = { 
      minrate: 0,
      maxrate: 0,
      mindelay: 0,
      maxdelay: 0,
      rate: 0,
      delay: 0,
      open: false,
      close: false,
      limit: false,
      lfo: 1,
      wave1: 0,
      wave2: 0,
      waveform: 0,
      waveform1: "empti",
      waveform2: "empti",
      oscillator: 1,
      minpm: 0,
      maxpm: 0,
      pm: 0,
      minpwm: 0,
      maxpwm: 0,
      pwm: 0,
      octave: 0,
      octave1: 0,
      octave2: 0,
    };
    this._changeNum1 = this._changeNum1.bind(this);
    this._changeNum2 = this._changeNum2.bind(this);
    this._changeNum3 = this._changeNum3.bind(this);
    this._changeNum4 = this._changeNum4.bind(this);
    this._changeNum5 = this._changeNum5.bind(this);    
    this._changeNum6 = this._changeNum6.bind(this);
    this._changeNum7 = this._changeNum7.bind(this);
    this._changeNum8 = this._changeNum8.bind(this);
    this._changeNum9 = this._changeNum9.bind(this);
    this._changeNum10 = this._changeNum10.bind(this);
    //This.props:ia ei voi bindaa. Pitää käyttää aina eri termiä.
  }
  
  _changeNum1(e) {
    if (e.target.validity.valid) {
      var newMinrate = +(e.target.value)
      this.setState({
        //Ei mikään estä, että on enemmän kuin 4 oskillaattoria tai LFO:ta. 
        //Omien syntetisaattorien maksimi on 3 oskillaattoria ja LFO maksimi on 2. Täten päätin, että satunoitsija saa olla maksimissa 3 oskillaattorien kanssa ja 2 LFO:n kanssa.
          minrate: newMinrate,
          rate: newMinrate + this.state.maxrate,
          raterandom1: Math.floor(Math.random() * this.state.rate ) + this.state.minrate,
          raterandom2: Math.floor(Math.random() * this.state.rate ) + this.state.minrate,
          lfo: Math.floor(Math.random()*2)+1
        }); 
    }
  }  
  _changeNum2(e) {
    if (e.target.validity.valid) {
      var newMaxrate = +(e.target.value)
      this.setState({
        maxrate: newMaxrate,
          rate: this.state.minrate + newMaxrate,
          raterandom1: Math.floor(Math.random() * this.state.rate ) + this.state.minrate,
          raterandom2: Math.floor(Math.random() * this.state.rate ) + this.state.minrate,
          lfo: Math.floor(Math.random()*2)+1
          
        })

        ; 
    }
  }
  _changeNum3(e) {
    if (e.target.validity.valid) {
      var newMindelay = +(e.target.value)
      this.setState({
          mindelay: newMindelay,
          delay: newMindelay + this.state.maxdelay,
          delayrandom1: Math.floor(Math.random() * this.state.delay ) + this.state.delay,
          delayrandom2: Math.floor(Math.random() * this.state.delay ) + this.state.delay,
          lfo: Math.floor(Math.random()*2)+1
        }); 
    }
  } 

    _changeNum4(e) {
    if (e.target.validity.valid) {
      var newMaxdelay = +(e.target.value)
      this.setState({
        maxdelay: newMaxdelay,
          delay: this.state.mindelay + newMaxdelay,
          delayrandom1: Math.floor(Math.random() * this.state.delay ) + this.state.delay,
          delayrandom2: Math.floor(Math.random() * this.state.delay ) + this.state.delay,
          lfo: Math.floor(Math.random()*2)+1
        }); 
    }
  }
      _changeNum6(e) {
        if (e.target.validity.valid) {
          var newMinpm = +(e.target.value)
          this.setState({
              minpm: newMinpm,
              pm: newMinpm + this.state.maxpm,
              pmrandom1: Math.floor(Math.random() * this.state.pm ) + this.state.newMinpm,
              pmrandom2: Math.floor(Math.random() * this.state.pm ) + this.state.newMinpm,
              oscillator: Math.floor(Math.random()*2)+1
            }); 
        }
      } 
        _changeNum8(e) {
        if (e.target.validity.valid) {
          var newMinpwm = +(e.target.value)
          this.setState({
            minpwm: newMinpwm,
              pwm: newMinpwm + this.state.maxpwm,
              pwmrandom1: Math.floor(Math.random() * this.state.pwm ) + this.state.newMinpwm,
              pwmrandom2: Math.floor(Math.random() * this.state.pwm ) + this.state.newMinpwm,
              oscillator: Math.floor(Math.random()*2)+1
            }); 
        }
      }  _changeNum7(e) {
        if (e.target.validity.valid) {
          var newMaxpm = +(e.target.value)
          this.setState({
            maxpm: newMaxpm,
              pm: newMaxpm + this.state.minpm,
              pmrandom1: Math.floor(Math.random() * this.state.pm ) + this.state.minpm,
              pmrandom2: Math.floor(Math.random() * this.state.pm ) + this.state.minpm,
              oscillator: Math.floor(Math.random()*2)+1
            }); 
        }
      } 
        _changeNum9(e) {
        if (e.target.validity.valid) {
          var newMaxpwm = +(e.target.value)
          this.setState({
            maxpwm: newMaxpwm,
              pwm: this.state.minpwm + newMaxpwm,
              pwmrandom1: Math.floor(Math.random() * this.state.pwm ) + this.state.minpwm,
              pwmrandom2: Math.floor(Math.random() * this.state.pwm ) + this.state.minpwm,
              oscillator: Math.floor(Math.random()*2)+1
            });

            this.setState({
              limit: !this.state.limit}); 
        }
      }
      _changeNum5(e){
        if (e.target.validity.valid) {
          if (this.state.waveform1 !== "empti") {
            this.setState({waveform2: e.target.value})
          } else {
            this.setState({waveform1: e.target.value})
          }          }
          
          if (this.state.waveform1 === "Random") {
            this.setState({
              waveform1: Math.floor(Math.random()*5)+1})
              //Terror of if statements for waveform 1 randomization
          if (this.state.waveform1 === 1) {
            this.setState({
              waveform1: "Sine"})
          } 
          if (this.state.waveform1 === 2) {
            this.setState({
              waveform1: "Triangle"})
          } 
          if (this.state.waveform1 === 3) {
            this.setState({
              waveform1: "Square"})
          } 
          if (this.state.waveform1 === 4) {
            this.setState({
              waveform1: "Sawtooth"})
          } 
          if (this.state.waveform1 === 5) {
            this.setState({
              waveform1: "Inverse Sawtooth"})
          } 
          } else {
            this.setState({ 
              waveform2: Math.floor(Math.random()*5)+1})
                      //Terror of if statements for waveform 2 randomization
          if (this.state.waveform2 === 1) {
            this.setState({
              waveform2: "Sine"})
          } 
          if (this.state.waveform2 === 2) {
            this.setState({
              waveform2: "Triangle"})
          } 
          if (this.state.waveform2 === 3) {
            this.setState({
              waveform2: "Square"})
          } 
          if (this.state.waveform2 === 4) {
            this.setState({
              waveform2: "Sawtooth"})
          } 
          if (this.state.waveform2 === 5) {
            this.setState({
              waveform2: "Inverse Sawtooth"})
          } 
          }
        }
      
        _changeNum10(e){
          if (e.target.validity.valid) {
            if (this.state.octave1 !== 0) {
              this.setState({octave2: e.target.value})
            } else {
              this.setState({octave1: e.target.value})
            }          }
          }












      
  toggle() {
    var number = this.state.lfo;
    var oscnumber = this.state.oscillator;
     if (number === 1 ) {
        this.setState({
       open: !this.state.open});
    }
    else {
        this.setState({
          close: !this.state.close, 
          open: !this.state.open,
        });
     }
    // if (oscnumber === 1) {
      // this.setState({
        // limit: !this.state.limit
       //})
     //}
     console.log(oscnumber) //Unoperational
     //Jos tyhjä, niin oletuksena on Sine
     if (this.state.waveform1 === "empti") {
      this.setState({waveform1: "Sine", waveform2: "Sine"})
    }
//Poistetaan kaikki NaN:it
     var raterandom1 = this.state.raderandom1;
     if (raterandom1 === NaN)
       {this.setState({
         raterandom1: this.state.minrate
       }); 
     }
     var raterandom2 = this.state.raderandom2;
     if (raterandom2 === NaN)
       {this.setState({
         raterandom2: this.state.minrate
       }); 
     }
     var ratedelay1 = this.state.radedelay1;
     if (ratedelay1 === NaN)
       {this.setState({
         ratedelay1: this.state.mindelay
       }); 
     }
     var ratedelay2 = this.state.radedelay2;
     if (ratedelay2 === NaN)
       {this.setState({
         ratedelay2: this.state.mindelay
       }); 
     }
  }
  //
  //
  //
  //  Väli  
  //
  //
  //
  render() {
    return (
      <div>
       <div id="demo" className={"form" + (this.state.open ? ' out' : '')}>
         
        <div className="row">
        <h3>LFOs</h3>
        
        <h4>Rates</h4>
        <div class="minirow">
          <p>Minimum Rate:</p>
          <input type="tel" value={this.state.minrate} onChange={this._changeNum1} step="any" />
          <p>Maximum Rate:</p>
          <input type="tel" value={this.state.maxrate} onChange={this._changeNum2} step="any" />

          
          </div>

          <h4>Delays</h4>
          <div class="minirow">
          <p>Minimum Delay:</p>
          <input type="tel" value={this.state.mindelay} onChange={this._changeNum3} step="any" />
          <p>Maximum Delay:</p>
          <input type="tel" value={this.state.maxdelay} onChange={this._changeNum4} step="any" />
          </div>

          <h4>Waveform(Select two):</h4>
          <div class="Lefty-Righty">
            <div class="uno">
          <input  type="radio" value="Sine" onClick={this._changeNum5} />
          <input type="radio" value="Triangle" onClick={this._changeNum5} />
          <input  type="radio" value="Square" onClick={this._changeNum5} /><br></br>
          <p>Sine</p>
          <p>Triangle</p>
          <p>Square</p>
          </div>
          </div>
          <div class="Lefty-Righty"><div class="dos">
          <input type="radio" value="Sawtooth" onClick={this._changeNum5} />
          <input type="radio" value="Inverse Sawtooth" onClick={this._changeNum5} />
          <input type="radio" value="Random" onClick={this._changeNum5} />
         <br></br>
            <p>Sawtooth</p>
            <p>Inverse Sawtooth</p>
            <p>Random</p>
            </div>
       </div></div>

       <br/>
        <div className="row">
        <h3>Oscillators</h3>
        <h4>Pitch Modulation</h4>
          <div class="minirow">
          <p>Minimum Pitch Modulation:</p>
          <input type="tel" value={this.state.minpm} onChange={this._changeNum6} step="any" />
          <p>Maximum Pitch Modulation:</p>
          <input type="tel" value={this.state.maxpm} onChange={this._changeNum7} step="any" />
          </div>
          <h4>Delays</h4>
          <div class="minirow">
          <p>Minimum Pulse Width Modulation:</p>
          <input type="tel" value={this.state.minpwm} onChange={this._changeNum8} step="any" />
          <p>Maximum Pulse Width Modulation:</p>
          <input type="tel" value={this.state.maxpwm} onChange={this._changeNum9} step="any" />
          </div>
          <h4>Octave(Select two):</h4>
          <div class="Lefty-Righty-Row"><div class="tres">
          <div class="line"><input type="radio" value="4" onClick={this._changeNum10} /><p >4"</p></div>
          <div class="line"><input type="radio" value="8" onClick={this._changeNum10} /><p >8"</p></div>
          <div class="line"><input type="radio" value="16" onClick={this._changeNum10} /><p >16"</p></div>
          <div class="line"><input type="radio" value="32" onClick={this._changeNum10} /><p >32"</p></div>

            </div>
        </div> 
        </div> 
        </div>
        <div id="demo" className={"collapse" + (this.state.open ? ' in' : '')}>
          <div class="Lefty-Righty-Bonus">
        <p>Number of lfos:<p>{this.state.lfo}</p></p>
        <p>Rate 1:<p>{this.state.raterandom1}</p></p>
        <p>Delay 1:<p>{this.state.delayrandom1}</p></p>        
        <p>Wave 1:<p>{this.state.waveform1}</p></p>
        <div className={"pi"+(this.state.close ? ' gin' : '')}>
        <p>Rate 2:<p>{this.state.raterandom2}</p></p>
        <p>Delay 2:<p>{this.state.delayrandom2}</p></p>
        <p>Wave 2:<p>{this.state.waveform2}</p></p>
        </div>

<br></br>
        <p>Number of Oscillators:<p>{this.state.oscillator}</p></p>
        <p>Pitch Modulation 1:<p>{this.state.pmrandom1}</p></p>
        <p>Pulse Width Modulation 1:<p>{this.state.pwmrandom1}</p></p>        
        <p>Octave:<p> {this.state.octave1}</p></p>
        <p>Pitch Modulation 2:<p>{this.state.pmrandom2}</p></p>
        <p>Pulse Width Modulation 2:<p>{this.state.pwmrandom2}</p></p>
        <p>Octave:<p> {this.state.octave2}</p></p>

        </div>
        </div>
        <button className ="btn" onClick={this.toggle.bind(this)}>Randomize this!</button>

      </div>
    )
  }  
}  
  
export default FillableForm;