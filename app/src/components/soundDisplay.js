import React from "react";

function Display(props) {
    if (props.power) {
        return (
            <div className={props.defaultClass}>
                <p className={props.textClass}>{props.displayText}</p>
            </div>
        )
    } else {
        return (
            <div className={props.defaultClass}>
                <p className={props.textClass}></p>
            </div>
        )
    }
}

export default Display;