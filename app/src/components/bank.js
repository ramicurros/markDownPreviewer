import React, { useState, useEffect } from "react";

function Bank(props) {
    const [click, setClick] = useState(false);
    const [style, setStyle] = useState({ color: 'rgba(128, 128, 128, 50%)' })

     useEffect(() => {
            if (click) {
                setStyle({ color: 'rgba(157, 231, 231)'});
                props.triggerFunction(props.audioBank2);
            } else {
                props.triggerFunction(props.audioBank1)
                setStyle({ color: 'rgba(128, 128, 128, 50%)'})
            }
    }, [click])

    if (props.power) {
        return (
            <button className={props.buttonClass} style={style} onClick={() => setClick(!click)}>{props.text}</button>
        );
    } else {
        return (
            <button className={props.buttonClass}>{props.text}</button>
        );
    }
}

export default Bank;