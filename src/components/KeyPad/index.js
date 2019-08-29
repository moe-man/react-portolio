import React from 'react';
import Button from '../Button';

class KeyPad extends React.Component{

    renderButton(item){

        var buttonType = "\"number-button\""

            if (item === '-' || item === '+' || item === "=")
                buttonType = "\"operator-button\""

        return (<Button onClick = {() => this.props.onClick(item)} buttonType = {buttonType} buttonLabel = {item}/>)
    }

    createButtons(){
       const buttonArr = [['7', '8', '9', '-'], ['4', '5',
    '6', '+'], ['1', '2', '3', '=']]

       var lowerHalfOfKeypad = []

        for (var i = 0; i < buttonArr.length; i++){

            const buttonRow = buttonArr[i].map(item => {

                return (this.renderButton(item))
            })

            lowerHalfOfKeypad.push(<div className="row">{buttonRow}</div>)
        }    

        return(lowerHalfOfKeypad)
    }

   /* inputSource(){
        if (this.props.numOnScreen === "")
            return(<input/>)
        else
            return(<input value = {this.props.numOnScreen}/>)
        
    }*/

    render (){
        return (
            <div>
               <div><input value = {this.props.numOnScreen}/></div>
                <button className="clear-button" onClick = {() => this.props.onClick("clear")}>clear</button>
                <button className="divide-button" onClick = {() => this.props.onClick('/')}>/</button>
                {this.createButtons()}
            </div>
    );

    }

}

export default KeyPad;