import React from 'react';

import Person from './Person/';

function DataList(props) {
  const { people } = props;
    console.log(props)
    const peopleComponents = people.map((person, i) =>
        <Person
            key={person.name + i}{...person} />);

    return(
<div>
        <h1> HIT LIST</h1>
        <div className="ul-container">
            <ul>
                {peopleComponents}
            </ul>
        </div>
        </div>
    )

};

export default DataList;