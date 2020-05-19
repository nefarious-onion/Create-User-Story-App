import React from 'react';
import './Userstory.css';

const Userstory = ({title}) => {
    return (
        <div className='list__item'>
            <p>{title}</p>
        </div>
    );
}

export default Userstory;
