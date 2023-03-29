import React, { useRef, useState, useEffect } from 'react';

function Pad(props, ref) {
    const audioRef = useRef(null);

    let drumPadClass = `d-flex align-items-center justify-content-center ${props.class}`

    function play() {
        if (props.power) {
            audioRef.current.currentTime = 0;
            audioRef.current.volume = props.volumen;
            props.inDisplay(props.audioIdentity)
            ref.current.style = 'border: 2px solid rgba(157, 231, 231); color: rgba(157, 231, 231); transition: all 0.1s';
            audioRef.current.play();
        } else {
            props.inDisplay('')
            return console.log('off');
        }
    }



    return (
        <div className={drumPadClass} id={props.identity} ref={ref} onClick={function (event) { play(); }} >
            {props.text}
            <audio ref={audioRef} id={props.text} className={props.audioClass} src={props.audiosrc}></audio>
        </div>
    );
}


const forwardedPad = React.forwardRef(Pad);

export default forwardedPad;