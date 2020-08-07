import React from 'react';

const Current = ({apparentTemp, icon, currentSummary, dailySummary}) => {

   
    return (
        <div className="location">
            <h2>{apparentTemp} degrees celsius</h2>
            <image>{icon}</image>
            <h2> {currentSummary}</h2>
            <h2>{dailySummary}</h2>
        </div>
    )
}   

export default Current;