import React from 'react';

const ProgressComponent = (props) => {
    return (
        <div className="propgress">
            {/* <div className="progress-bar" 
            style={{ animationDuration: `${props.count}` }}
            ></div> */}
            <div className={`progress-bar`} 
            
            style={{width:`${props.wCount}%`, transition:`all ${props.progressCount}s ease` }}
            ></div>
        </div>
    );
};

export default ProgressComponent;