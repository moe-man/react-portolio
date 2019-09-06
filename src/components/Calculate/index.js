import React from 'react'
import KeyPad from '../KeyPad'

class Calculate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            screen: "",
            num: null,
            isSumDisplayed: false,
            operation: ""
        }

    }

    addition(){
        if (this.state.screen !== "")
        {   
            var num = this.state.num
            this.setState({operation: '+'})

            if (!num)
                this.setState({screen: "", num: Number(this.state.screen), isSumDisplayed: false})
            
            else 
            {
                const sum = num + Number(this.state.screen)
                this.setState({screen: String(sum), num: null, isSumDisplayed: true})

            }
        }
    }

    subtract(){
        if (this.state.screen !== "")
        {   
            var num = this.state.num
            this.setState({operation: '-'})

            if (!num)
                this.setState({screen: "", num: Number(this.state.screen), isSumDisplayed: false})
            
            else 
            {
                const sum = num - Number(this.state.screen)
                this.setState({screen: String(sum), num: null, isSumDisplayed: true})
            }
        }
    }

    divide(){
        if (this.state.screen !== "")
        {   
            var num = this.state.num
            this.setState({operation: '/'})

            if (!num)
                this.setState({screen: "", num: Number(this.state.screen), isSumDisplayed: false})
            
            else 
            {
                const sum = num / Number(this.state.screen)
                this.setState({screen: String(sum), num: null, isSumDisplayed: true})
            }
        }
    }

    solve (){
        if (this.state.operation === "+")
            {
                var sum = this.state.num + Number(this.state.screen)
                this.setState({screen: String(sum), num: null, isSumDisplayed: true}

                )
            }
        else if (this.state.operation === "-")
            {
                var sum = this.state.num - Number(this.state.screen)
                this.setState({screen: String(sum), num: null, isSumDisplayed: true}

                )
            }
        else if (this.state.operation === "/")
            {
                var sum = this.state.num / Number(this.state.screen)
                this.setState({screen: String(sum), num: null, isSumDisplayed: true}

                )
            }
    }

    clearScreen(){
        this.setState({
            isSumDisplayed: false,
            screen: "",
            num: null
        }, ()=> console.log(this.state))
    }

    handleChange = (value) =>{
        console.log('value', value)

        if(!this.state.isSumDisplayed)
            this.setState({screen: value})
       
        else {
            this.clearScreen()
            this.setState({screen: value})
        }    
       
    }

    handleClick(button){
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

            let currentText = this.state.screen;
            currentText += button;
            this.setState({screen: currentText})

            if(this.state.isSumDisplayed) {
                this.clearScreen()
                this.setState({screen: String(button)})
           }
       }
     }

    render(){
        console.log('sumIsDiplayed', this.state.isSumDisplayed)
        return(<KeyPad onClick = {(button) => {this.handleClick(button)}} numOnScreen = {this.state.screen}
        onChange = {this.handleChange}/>)
    }
}

export default Calculate;



