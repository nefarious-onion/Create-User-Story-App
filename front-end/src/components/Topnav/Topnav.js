import React from 'react';
import {Link} from "react-router-dom";
import './Topnav.css';

const Topnav = ({title}) => {
    return (
        <div className='topnav-container'>
            <Link to='/' className='link'><h2 className='logo'>Create Userstories</h2></Link>
            <h2 className='topnav-title'>{title}</h2>
            <Link to='/' className='link'><h2>About app</h2></Link>
        </div>
    );
}

export default Topnav;
