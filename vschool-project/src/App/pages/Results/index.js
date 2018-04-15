import React from 'react'
import {connect} from 'react-redux';
import { anyNeededActionCreators} from '/../redux';
import ResultsDisplay from './ResultsDisplay';
function Results() {
    return (
        <div>
            <ResultsDisplay/>
        </div>
    )
}

export default Results;
