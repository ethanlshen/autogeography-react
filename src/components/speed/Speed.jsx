import React from 'react';
import './speedstyles.css';

const Speed = () => {
    return (
        <div className='speed'>
            <div className='container'>
                <div className='top'> 
                    <h1>Speed</h1>
                </div>
                <div className='bottom'>
                    <button className='btn btn-dark'>Drive</button>
                    <button className='btn'>Ride</button>
                </div>
            </div>
        </div>
    )
}

export default Speed; 