import React from 'react';
import '@styles/NotFound.scss'

const NotFound = () => {
    return (
        <div className='container'>
            <div className='message'>
                <h1 className='title'>Hey!!</h1>
                <p className='text'>Sorry, we couldn't found what you're looking for.</p>
            </div>
        </div>
    );
};

export default NotFound;