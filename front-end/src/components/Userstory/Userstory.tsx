import React from 'react';
import './Userstory.css';

const Userstory = ({title, onStoryClick, id }) => {
    return (
        <div className='list__item' onClick={() => {
            console.log(id);
            onStoryClick(id);
        }
        }>
            <p>{title}</p>
        </div>
    );
}

export default Userstory;
