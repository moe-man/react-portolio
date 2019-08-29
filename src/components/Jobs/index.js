import React from 'react';
import Job from '../Job';

const Jobs = (props) => {
    const jobs = props.jobs;
    const jobLiList = jobs.map((job) => {
        if (job.fields.display === "true") {
        return <Job job={job.fields}/>
        }
    })
    return ( 
    <ul class="jobs-list"> 
    {jobLiList}
    </ul>
    )
}

export default Jobs;