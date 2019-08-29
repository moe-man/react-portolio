import React from 'react'
import Square from '../Square'

class Board extends React.Component {
  

    renderSquare(i) {
      let square = this.props.squares[i]
      let board = this.props.squares
      let isWinningSquare = false

      let winningCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8],
        [2, 4, 6],
      ];

      for (var arr = 0; arr < winningCombinations.length; arr++)
        
          if (square === board[winningCombinations[arr][0]] 
           && square === board[winningCombinations[arr][1]] 
            && square === board[winningCombinations[arr][2]]
            && square)
            {
              if (i === winningCombinations[arr][0] ||
                i === winningCombinations[arr][1] ||
                i === winningCombinations[arr][2]
                )
                  isWinningSquare = true
            }
      return (<Square value={this.props.squares[i]} 
        winningSquare={isWinningSquare} 
        onClick = {() => this.props.onClick(i)}/>);
    }

    

    buildBoard(){

      let array = [];
      let array2 = [];

      for (let rowNum = 1, squareNum = 0; rowNum <= 3; rowNum++)
      {
        for (let entry = 1; entry <= 3; entry++)
        { 
          array2.push(this.renderSquare(squareNum))
          squareNum++;

          if (entry === 3)
          { 
             array.push(<div className="board-row">{array2}</div>);
             array2 = [];
          }

        }
      }

      return array;

    }

    render() {
      return (
        <div className = "grid">
          {this.buildBoard()}
        </div>
      );
    }

  }

  export default Board