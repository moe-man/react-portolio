import React from 'react'
import Board from '../Board'

let rowAndCol = "";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          history: [{
            squares: Array(9).fill(null),
            positionOfAddition: "",
            color: "yellow"
          }],
          xIsNext: true,
          stepNumber: 0,
          toggle: false,
          moveList: []
        };
      }

      detRowAndCol(i){

          let row = "";
          let column = "";

          if (i >= 0 && i <= 2)
            row = '1'
          else if (i >= 3 && i <= 5)
            row = '2'
          else if (i >= 6 && i <= 8)
            row = '3'

          if (i === 0 || i === 3 || i === 6)
            column = '1'
          else if (i === 1 || i === 4 || i === 7)
            column = '2'
          else if (i === 2 || i === 5 || i === 8)
            column = '3'

          return "Row " + row + ", Column " + column;
      }

      handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
      
        squares[i] = this.state.xIsNext ? 'X': 'O';
        this.setState({history: history.concat([{squares: squares, positionOfAddition: this.detRowAndCol(i)}]),
                      xIsNext: !this.state.xIsNext,
                      stepNumber: history.length});
      }
      
      jumpTo(step) {
      this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  changeColor(step){
    step.color = "red";
    for (let i = 0; i < this.state.history.length; i++)
      if (this.state.history[i] != step)
        this.state.history[i].color = "yellow"
  }

  toggle(){
    this.setState({toggle: !this.state.toggle})
  }

  determineStatus(winner, currentSquares){

    //let history = this.state.history;

    if (winner) {
      return 'Winner: ' + winner;
    } 
    else{
      for (var i = 0; i < 9; i++)
        if (!currentSquares[i])
          return 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      return "Draw"    
    }
  }

    render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    
    
    const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        
        return (
          <li key={move}>
            <div className = "history-buttons" onClick={() => {this.jumpTo(move); this.changeColor(step)}} style = {{color: step.color}}>{desc + " " + step.positionOfAddition}</div>
          </li>
        );
      });

      if (!this.state.toggle)
        this.state.moveList = moves
      else 
      { 
        
        let arr = []
        arr.push(moves[0])

        //couldn't get concat method to work
        //so had to do it this way.
        for (let i = moves.length - 1; i > 0; i--)
          arr.push(moves[i])
        this.state.moveList = arr
      }

      return (
        <div className="game">
          <div className="game-info">
            <div className="display-status">{this.determineStatus(winner, current.squares)}</div>
            <div className="toggle-button" onClick = {() => {this.toggle()}}>ascending/descending</div>
            <ol>{this.state.moveList}</ol>    
          </div>
          <div className="game-board">
            <Board squares={current.squares}
            onClick={(i) => this.handleClick(i)}/>
          </div>
        </div>
      );
    }
}

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export default Game;