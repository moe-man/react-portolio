import React from 'react';

const Job = (props) => (
    <div className="job-component">
        <div className ="title">{props.job.title} - {props.job.workplace} - {props.job.date}</div>
        <br></br>
    </div>
) 

export default Job;