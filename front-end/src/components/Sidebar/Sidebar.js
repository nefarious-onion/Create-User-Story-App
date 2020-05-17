import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = ({epics}) => {

const epicList = epics.map(epic => <Link key={epic._id}>{epic.title}</Link>)
    return (
        <div className='sidebar-container'>
            {epicList}
        </div>
    );
}

export default Sidebar;
