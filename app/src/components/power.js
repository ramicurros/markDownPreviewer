import React from "react";

function Power(props) {

  let buttonClass = `d-flex justify-content-center align-items-center ${props.buttonClass}`

  return (
      <button className={buttonClass} onClick={props.triggerFunction}>
        <img className={props.imgClass} src='https://csrelectrical.co.nz/files/uploads/2015/09/icon1.png' />
      </button>
  )
}

export default Power;