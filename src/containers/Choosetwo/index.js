import React from 'react'
import ReactDOM from 'react-dom';

class chooseTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: ["student1 ", "student2 ", "student3 ", 
                       "student4 ", "student5 ", "student6 ", 
                       "student7 ", "student8 ", "student9 "],
            pairs: [],
            
        }
    }

 createGroup() {
    var pair = []
    var students = this.state.students.slice()
    var pairs = this.state.pairs

    var groupSize = 2
    for (var i = 0; i < groupSize; i++){

        var randomIndex = Math.floor(Math.random() * (students.length))
        pair.push(students[randomIndex])
        students.splice(randomIndex, 1)
        }
        
    this.setState({pairs: pairs.concat(<div>{pair}</div>), students: students});
}

displayStudentsAtTop(){
    var arr = []

    this.state.students.forEach(function(element) {
        arr.push(<div className = "unselected-students">{element}</div>)})

    return arr
}

    render(){
        return(
    <div className = "names">  
        {this.displayStudentsAtTop()}
       <br></br>
       <button onClick = {() => this.createGroup()}>Create Group</button>
       {this.state.pairs}
    </div>
    
) }

}

export default chooseTwo;