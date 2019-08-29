import React from 'react'
import KeyPad from '../KeyPad'

class Calculate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            screen: "",
            num: null,
            sum: null,
            isSumDisplayed: false,
            operation: ""
        }
    }

    addition(){
        if (this.state.screen !== "")
        {   
            var num = this.state.num
            this.setState({operations: '+'})

            if (!num)
                this.setState({screen: "", num: Number(this.state.screen)})
            
            else 
            {
                const sum = num + Number(this.state.screen)
                this.setState({screen: String(sum), num: null, sum: sum, isSumDisplayed: true})

            }
        }
    }

    subtract(){
        if (this.state.screen !== "")
        {   
            var num = this.state.num
            this.setState({operations: '-'})

            if (!num)
                this.setState({screen: "", num: Number(this.state.screen)})
            
            else 
            {
                const sum = num - Number(this.state.screen)
                this.setState({screen: String(sum), num: null, sum: sum, isSumDisplayed: true})
            }
        }
    }

    divide(){
        if (this.state.screen !== "")
        {   
            var num = this.state.num
            this.setState({operations: '/'})

            if (!num)
                this.setState({screen: "", num: Number(this.state.screen)})
            
            else 
            {
                const sum = num / Number(this.state.screen)
                this.setState({screen: String(sum), num: null, sum: sum, isSumDisplayed: true})
            }
        }
    }

    solve (){
        if (this.state.operations === "+")
            {
                var sum = this.state.num + Number(this.state.screen)
                this.setState({screen: String(sum), sum: 0, num: null}

                )
            }
         else if (this.state.operations === "-")
            {
                var sum = this.state.num - Number(this.state.screen)
                this.setState({screen: String(sum), sum: 0, num: null}

                )
            }
            else if (this.state.operations === "/")
            {
                var sum = this.state.num / Number(this.state.screen)
                this.setState({screen: String(sum), sum: 0, num: null}

                )
            }
    }

    clearScreen(){
        this.setState({
            isSumDisplayed: false,
            screen: "",
            sum: 0,
            num: null
        }, ()=> console.log(this.state))
    }

    handleClick(button){
      console.log(button)
        if (button === "+") {
            this.addition();
        }
        else if (button === "-"){
            this.subtract();
        }
        else if (button === "="){
            this.solve();
        }
        else if (button === "clear") {
            this.clearScreen()
        }
        else if (button === "/"){
            this.divide()
        }
       else{  

           if(this.state.isSumDisplayed) {
                this.clearScreen()
           }
            let currentText = this.state.screen;
            currentText += button;
            this.setState({screen: currentText})
       }
     }

    render(){
        console.log('sumIsDiplayed', this.state.isSumDisplayed)
        return(<KeyPad onClick = {(button) => {this.handleClick(button)}} numOnScreen = {this.state.screen}/>)
    }
}

export default Calculate;



