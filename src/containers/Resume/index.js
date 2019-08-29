import React from 'react'
import { Link } from 'react-router-dom'
import ResumeHeader from '../../components/ResumeHeader'
import Job from '../../components/Job'
import Jobs from '../../components/Jobs'
import RelevantClasses from '../../components/RelevantClasses'
import Education from '../../components/School'
import Schools from '../../components/Schools'


const jobData = [{workplace: "Adecco", title: "Temp", date: "2005"},
{workplace: "Volt", title: "Temp", date: "2007"}];

const SchoolsAttended = [{college: "NCSU", major: "Physics", date: "2015-2017", details: "Major not complete."}, 
{college: "Wake Tech Community College", major: "Associate of Science", date: "2017", details: "Degree Attained"}];

const relevClasses = [{class: "C++ and Advanced C++ programming", details: 
"Covered topics include object oriented programming composition and inheritance, data structures such as stacks, queues,linked lists."},
{class: "Intro to Scientific Computing"
, details: "Used Python to solve problems within math and physics. Used numerical methods such as the Runge-Kutta method, finite-difference method, relaxation, etc."}]

class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resume: [],
            schools: [],
            classes: []
        }
    }

    componentDidMount(){
        this.getResume();
        this.getSchools();
        this.getClasses();
    }

    getResume() {
        const url ="https://api.airtable.com/v0/apppMLyXaeyCjxeYl/Table%201?maxRecords=3&view=Grid%20view"
        fetch(url, 
            { headers: { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY}
        })
        .then(response => response.json())
        .then(responseData => {
            console.log('My data', responseData)
            const resume = responseData.records;
            this.setState({resume: resume});
        });
    }

    getSchools () {
        const url ="https://api.airtable.com/v0/apppMLyXaeyCjxeYl/Table%202?maxRecords=3&view=Grid%20view"
        fetch(url, 
            { headers: { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY}
        })
        .then(response => response.json())
        .then(responseData => {
            console.log('My data', responseData)
            const schools = responseData.records;
            this.setState({schools: schools});
        });
    }

    getClasses () {
        const url ="https://api.airtable.com/v0/apppMLyXaeyCjxeYl/Table%203?maxRecords=3&view=Grid%20view"
        fetch(url, 
            { headers: { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY}
        })
        .then(response => response.json())
        .then(responseData => {
            console.log('My data', responseData)
            const classes = responseData.records;
            this.setState({classes: classes});
        });
    }

    

    render () { 
        return (
            <div className="view-container resume-page ">
             <ResumeHeader />
             <h4>Jobs</h4>
             <Jobs jobs={this.state.resume} />
            <h4>Education</h4>
            <Schools schools = {this.state.schools}/>
            <h4>Relevant Classes</h4>
            <RelevantClasses classes = {this.state.classes}/>
             </div>
        )

    }
}

export default Resume;