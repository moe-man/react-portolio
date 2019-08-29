import React from 'react';

const School = (props) => (
    <div className="relevant-education">    
        <p>{props.school.college} - {props.school.major} - {props.school.date} - {props.school.details}</p>
        <br></br>
    </div>
);

export default School;