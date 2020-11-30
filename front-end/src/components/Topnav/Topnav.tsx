import React from 'react';
import { Link } from "react-router-dom";
import './Topnav.css';

interface TopnavProps {
    title: string
}

const Topnav: React.FunctionComponent<TopnavProps> = ({ title }) => {
    return (
        <nav>
            <div className='nav-wrapper green darken-1'>
                <Link to='/' className='brand-logo header-font'>CREATE USER STORIES</Link>
                <ul className='right hide-on-med-and-down'>
                    <li>{title}</li>
                    <li> <Link to='/' className=''>About app</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Topnav;
