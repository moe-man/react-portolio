import React from 'react';

const ClassTaken = (props) => (
    <div className="class-taken">
        <div className ="class">{props.classTaken.class}</div>
        <br></br>
        <div className ="details">{props.classTaken.details}</div>
        <br></br>
    </div>
)

export default ClassTaken;