import React from 'react'

const Button = (props) => {

    return (
        <button className={props.buttonType} onClick={props.onClick}>{props.buttonLabel}</button>
      );

}

export default Button;