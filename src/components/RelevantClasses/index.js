import React from 'react'
import ClassTaken from '../ClassTaken'

const RelevantClasses = (props) => {
    const arrayOfObjects = props.classes;
    const arrayReturnedFromMap = arrayOfObjects.map(classTaken => {
        
        return <ClassTaken classTaken={classTaken.fields}/>}
    );

    return <ul class="relevant-classes">{arrayReturnedFromMap}</ul>;}
    
export default RelevantClasses;