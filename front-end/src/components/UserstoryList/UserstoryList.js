import React from 'react';
import Userstory from '../Userstory/Userstory';
import './UserstoryList.css';

const UserstoryList = ({ stories }) => {

    const storyList = stories.map(epic => <Userstory key={epic._id} title={epic.title} />)

    return (
        <div className='list-container'>
            {storyList}
        </div>
    );
}

export default UserstoryList;
