import React from 'react';

const Input = (props) => {
    return (
        <>
             {/* <input type="text" placeholder="Enter number" value={props.value} /> */}
             <input type="text" placeholder="Enter number" value={props.count} onChange={(e) => setCount(e.target.value)} />
        </>
    );
};

export default Input;