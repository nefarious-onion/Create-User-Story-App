import React from 'react';
import './Topnav.css';

const Topnav = ({title}) => {
    return (
        <div className='topnav-container'>
            <h2 className='logo'>Create Userstories</h2>
            <h2 className='topnav-title'>{title}</h2>
            <h2>About app</h2>
        </div>
    );
}

export default Topnav;
