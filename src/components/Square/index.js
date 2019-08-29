import React from 'react'

function Square(props){

  let color = {
    color: "black"
  };

  let winningSquareColor = {
    color: "red"
  }

  if (props.winningSquare)
    color = winningSquareColor

      return (
        <button className="square" 
            onClick={props.onClick} style = {color}>
          {props.value}
        </button>
      );
    
  }

  export default Square;