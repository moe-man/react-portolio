import React from 'react';
import School from '../School';

const Schools = (props) => {
    const arrayOfObjects = props.schools;
    const arrayOfMappedValues = arrayOfObjects.map(school => {
    return <School school={school.fields}/>})

    return <ul class="list-schools">{arrayOfMappedValues}</ul>;
}

export default Schools;