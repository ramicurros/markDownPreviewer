import React, {useState, useRef} from "react";

function Volume({volume, handleChange, wrapperClass, minValue, maxValue, stepValue, sliderClass}) {

    return (
        <div id='volume' className={wrapperClass}>
                <input type='range' className={sliderClass} defaultValue={volume} onChange={handleChange} min={minValue} max={maxValue} step={stepValue}/>
        </div>
    )
}

export default Volume; 