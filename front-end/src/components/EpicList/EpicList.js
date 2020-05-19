import React from 'react';
import { Link } from "react-router-dom";

const EpicList = ({ epics }) => {

    const epicList = epics.map(epic => <Link to={`/epic/${epic._id}`} className='list__item' key={epic._id}>{epic.title}</Link>)

    return (
        <div className='epiclist list-container'>
            {epicList}
        </div>

    );
}

export default EpicList;
