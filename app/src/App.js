import { useState, useEffect, useRef } from 'react';
import './App.css';
import Pad from './components/pad';
import Power from './components/power';
import Display from './components/soundDisplay';
import Bank from './components/bank';
import Volume from './components/volume';


function App() {
  const drumSoundsKit_1 = [
    {
      name: '808 - Babyonbaby',
      sound: "https://res.cloudinary.com/dvvu0wecp/video/upload/v1596822965/Beats/Andromeda/808/babyonbaby_lqpo4t.wav"
    }, {
      name: 'Kick 4',
      sound: "https://res.cloudinary.com/dvvu0wecp/video/upload/v1596823031/Beats/Andromeda/Kicks/KYLE_BEATS_ANDROMEDA_-_KICK_4_c1afzy.wav"
    }, {
      name: 'Clap 6',
      sound: "https://res.cloudinary.com/dvvu0wecp/video/upload/v1596823033/Beats/Andromeda/Claps/KYLE_BEATS_ANDROMEDA_-_CLAP_6_cfpc0b.wav"
    }, {
      name: 'Hi Hat 6',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596823010/Beats/Andromeda/Hi%20Hats/KYLE_BEATS_-_ANDROMEDA_HI_HAT_6_f5vqa3.wav'
    }, {
      name: 'Snare Dippy',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596822569/Beats/Andromeda/Snares/dippy_whccrn.wav'
    }, {
      name: 'Open Hat 2',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596823101/Beats/Andromeda/Open%20Hats/KYLE_BEATS_-_ANDROMEDA_OPEN_HAT_2_yicrvr.wav'
    }, {
      name: 'Left Field',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596822904/Beats/Andromeda/Perc/LEFT_FIELD_yoavpg.wav'
    }, {
      name: 'Reem',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596823048/Beats/Andromeda/Vox%20Chant%20Vocals/REEM_pnuprm.wav'
    }, {
      name: 'Kill Bill',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596822907/Beats/Andromeda/Perc/KILL_BILL_SIREN_efbejs.wav'
    }
  ]

  const drumSoundsKit_2 = [
    {
      name: '808 Lettuce',
      sound: "https://res.cloudinary.com/dvvu0wecp/video/upload/v1596822965/Beats/Andromeda/808/lettuce_knu06o.wav"
    }, {
      name: 'Kick 1',
      sound: "https://res.cloudinary.com/dvvu0wecp/video/upload/v1596823031/Beats/Andromeda/Kicks/KYLE_BEATS_ANDROMEDA_-_KICK_1_fnorgd.wav"
    }, {
      name: 'Clap 1',
      sound: "https://res.cloudinary.com/dvvu0wecp/video/upload/v1596823032/Beats/Andromeda/Claps/KYLE_BEATS_ANDROMEDA_-_CLAP_1_youkew.wav"
    }, {
      name: 'Hi Hat 2',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596823010/Beats/Andromeda/Hi%20Hats/KYLE_BEATS_-_ANDROMEDA_HI_HAT_2_sxuhc5.wav'
    }, {
      name: 'Snare Slippy',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596822569/Beats/Andromeda/Snares/slip_lln2xw.wav'
    }, {
      name: 'Awesome Crash',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596822907/Beats/Andromeda/Perc/AWESOME_CRASH_tswuca.wav'
    }, {
      name: 'Scared',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596822906/Beats/Andromeda/Perc/SACRED_ln0gsx.wav'
    }, {
      name: 'Fixit',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596822904/Beats/Andromeda/Perc/FIXIT_a1uli2.wav'
    }, {
      name: 'Do Yah',
      sound: 'https://res.cloudinary.com/dvvu0wecp/video/upload/v1596823053/Beats/Andromeda/Vox%20Chant%20Vocals/Do_ya_txxwd9.wav'
    }
  ]

  const [power, setPower] = useState(false);
  const [audioBank, setBank] = useState(drumSoundsKit_1);
  const [displayText, setDisplayText] = useState('');
  const [vol, setVolume] = useState(0.5);

  const padQ = useRef(null);
  const padW = useRef(null);
  const padE = useRef(null);
  const padA = useRef(null);
  const padS = useRef(null);
  const padD = useRef(null);
  const padZ = useRef(null);
  const padX = useRef(null);
  const padC = useRef(null);



  let padClass = 'drum-pad';
  let powerOutLineClass = 'd-flex justify-content-center align-items-center power-outline';
  let powerClass = 'power-button';
  let bankClass = 'bank-button';
  let bankOutlineClass = 'd-flex justify-content-center align-items-center button-outline'
  let displayClass = 'd-flex justify-content-center align-items-center sound-display';
  let volumeClass = 'd-flex justify-content-center align-items-center volumeDiv';

  if (power) {
    padClass += ' drum-padOn';
    powerOutLineClass += ' powerOn';
    bankOutlineClass += ' bank-buttonOn';
    displayClass += ' sound-displayOn';
    volumeClass += ' volumeDivOn';
  }

  function play(x) {
    if (power) {
      switch (x.toUpperCase()) {
        case 'Q':
          return padQ.current.click();
        case 'W': padW.current.style = 'border: 2px solid rgba(157, 231, 231, 100%); color: rgba(157, 231, 231, 100%); transition: all 0.1s';
          return padW.current.click();
        case 'E': padE.current.style = 'border: 2px solid rgba(157, 231, 231, 100%); color: rgba(157, 231, 231, 100%); transition: all 0.1s';
          return padE.current.click();
        case 'A': padA.current.style = 'border: 2px solid rgba(157, 231, 231, 100%); color: rgba(157, 231, 231, 100%); transition: all 0.1s';
          return padA.current.click();
        case 'S': padS.current.style = 'border: 2px solid rgba(157, 231, 231, 100%); color: rgba(157, 231, 231, 100%); transition: all 0.1s';
          return padS.current.click();
        case 'D': padD.current.style = 'border: 2px solid rgba(157, 231, 231, 100%); color: rgba(157, 231, 231, 100%); transition: all 0.1s';
          return padD.current.click();
        case 'Z': padZ.current.style = 'border: 2px solid rgba(157, 231, 231, 100%); color: rgba(157, 231, 231, 100%); transition: all 0.1s';
          return padZ.current.click();
        case 'X': padX.current.style = 'border: 2px solid rgba(157, 231, 231, 100%); color: rgba(157, 231, 231, 100%); transition: all 0.1s';
          return padX.current.click();
        case 'C': padC.current.style = 'border: 2px solid rgba(157, 231, 231, 100%); color: rgba(157, 231, 231, 100%); transition: all 0.1s';
          return padC.current.click();
      }
    } else {
      return console.log('off');
    }
  }

  useEffect(() => {
    if (power != true) {
      padQ.current.style = 'border: 1px outset #3C3C3C; color: #0b0c0f; transition: all 0.3s';
      padW.current.style = 'border: 1px outset #3C3C3C; color: #0b0c0f; transition: all 0.3s';
      padE.current.style = 'border: 1px outset #3C3C3C; color: #0b0c0f; transition: all 0.3s';
      padA.current.style = 'border: 1px outset #3C3C3C; color: #0b0c0f; transition: all 0.3s';
      padS.current.style = 'border: 1px outset #3C3C3C; color: #0b0c0f; transition: all 0.3s';
      padD.current.style = 'border: 1px outset #3C3C3C; color: #0b0c0f; transition: all 0.3s';
      padZ.current.style = 'border: 1px outset #3C3C3C; color: #0b0c0f; transition: all 0.3s';
      padX.current.style = 'border: 1px outset #3C3C3C; color: #0b0c0f; transition: all 0.3s';
      padC.current.style = 'border: 1px outset #3C3C3C; color: #0b0c0f; transition: all 0.3s';
    } else {
      resetStyle();
    }
  }, [power])

  function resetStyle() {
    padQ.current.style = 'border: 1px outset rgba(157, 231, 231, 30%); color: rgba(157, 231, 231, 30%); transition: all 0.3s';
    padW.current.style = 'border: 1px outset rgba(157, 231, 231, 30%); color: rgba(157, 231, 231, 30%); transition: all 0.3s';
    padE.current.style = 'border: 1px outset rgba(157, 231, 231, 30%); color: rgba(157, 231, 231, 30%); transition: all 0.3s';
    padA.current.style = 'border: 1px outset rgba(157, 231, 231, 30%); color: rgba(157, 231, 231, 30%); transition: all 0.3s';
    padS.current.style = 'border: 1px outset rgba(157, 231, 231, 30%); color: rgba(157, 231, 231, 30%); transition: all 0.3s';
    padD.current.style = 'border: 1px outset rgba(157, 231, 231, 30%); color: rgba(157, 231, 231, 30%); transition: all 0.3s';
    padZ.current.style = 'border: 1px outset rgba(157, 231, 231, 30%); color: rgba(157, 231, 231, 30%); transition: all 0.3s';
    padX.current.style = 'border: 1px outset rgba(157, 231, 231, 30%); color: rgba(157, 231, 231, 30%); transition: all 0.3s';
    padC.current.style = 'border: 1px outset rgba(157, 231, 231, 30%); color: rgba(157, 231, 231, 30%); transition: all 0.3s';
  }

  function powerSwitch() {
    setPower(!power);
  }

  useEffect(() => {
    if (power) {
      setDisplayText("LET'S DO MUSIC")
    }
  }, [power])

  function bankSwitch(x) {
    if (power) {
      setBank(x);
    } else {
      return console.log("off")
    }
  }

  function handleChange(event) {
    setVolume(event.target.value / 100);
    if(power)setDisplayText(`${event.target.value}%`);
  }

  return (
    <div id='app' className="d-flex flex-colummn justify-content-center align-items-center App" tabIndex="0" onKeyDown={function (event) { play(event.key) }} onKeyUp={() => { if (power) resetStyle() }} onMouseUp={function (event) { if (power) resetStyle(); }}>
      <div id='drum-machine' className='d-flex flex-column justify-content-center align-items-center drum-machine' >
        <div id='top-row' className='d-flex flex-row justify-content-start align-items-center top-row'>
          <div id='power-wrapper' className='powerWrapper'>
            <div className={powerOutLineClass}>
              <Power buttonClass={powerClass} imgClass='power-logo' triggerFunction={powerSwitch} />
            </div>
          </div>
          <div id='display' className='d-flex justify-content-center align-items-center displayDiv'>
            <Display defaultClass={displayClass} power={power} textClass='displayText' displayText={displayText} />
          </div>
        </div>
        <div className='d-flex flex-row-reverse align-items-center justify-content-center'>
          <div className='d-flex flex-column justify-content-center align-items-center pads'>
            <div id='Q-W-E' className='d-flex flex-row justify-content-center align-items-center padsRow'>
              <Pad class={padClass} text='Q' identity='idQ' ref={padQ} power={power} audiosrc={audioBank[0].sound} volumen={vol} audioClass='clip' audioIdentity={audioBank[0].name} inDisplay={setDisplayText} />
              <Pad class={padClass} text='W' identity='idW' ref={padW} power={power} audiosrc={audioBank[1].sound} volumen={vol} audioClass='clip' audioIdentity={audioBank[1].name} inDisplay={setDisplayText} />
              <Pad class={padClass} text='E' identity='idE' ref={padE} power={power} audiosrc={audioBank[2].sound} volumen={vol} audioClass='clip' audioIdentity={audioBank[2].name} inDisplay={setDisplayText} />
            </div>
            <div id='A-S-D' className='d-flex flex-row justify-content-center align-items-center padsRow'>
              <Pad class={padClass} text='A' identity='idA' ref={padA} power={power} audiosrc={audioBank[3].sound} volumen={vol} audioClass='clip' audioIdentity={audioBank[3].name} inDisplay={setDisplayText} />
              <Pad class={padClass} text='S' identity='idS' ref={padS} power={power} audiosrc={audioBank[4].sound} volumen={vol} audioClass='clip' audioIdentity={audioBank[4].name} inDisplay={setDisplayText} />
              <Pad class={padClass} text='D' identity='idD' ref={padD} power={power} audiosrc={audioBank[5].sound} volumen={vol} audioClass='clip' audioIdentity={audioBank[5].name} inDisplay={setDisplayText} />
            </div>
            <div id='Z-X-C' className='d-flex flex-row justify-content-center align-items-center padsRow'>
              <Pad class={padClass} text='Z' identity='idZ' ref={padZ} power={power} audiosrc={audioBank[6].sound} volumen={vol} audioClass='clip' audioIdentity={audioBank[6].name} inDisplay={setDisplayText} />
              <Pad class={padClass} text='X' identity='idX' ref={padX} power={power} audiosrc={audioBank[7].sound} volumen={vol} audioClass='clip' audioIdentity={audioBank[7].name} inDisplay={setDisplayText} />
              <Pad class={padClass} text='C' identity='idC' ref={padC} power={power} audiosrc={audioBank[8].sound} volumen={vol} audioClass='clip' audioIdentity={audioBank[8].name} inDisplay={setDisplayText} />
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <div id='bank' className='d-flex justify-content-center align-items-center bank'>
              <div className={bankOutlineClass}>
                <Bank audioBank1={drumSoundsKit_1} audioBank2={drumSoundsKit_2} power={power} triggerFunction={bankSwitch} buttonClass={bankClass} text='BANK 2' />
              </div>
            </div>
            <Volume wrapperClass={volumeClass} sliderClass='volumeSlider' defaultValue={vol} handleChange={handleChange} minValue={0} maxValue={100} stepValue={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;