import React from 'react';
import Userstory from '../Userstory/Userstory';
import './UserstoryList.css';


const UserstoryList = ({ stories }) => {

    const storyList = stories.map(story => <Userstory key={story._id} title={story.title} />)

    return (
        <div className='list-container'>
            {storyList}
        </div>
    );
}

export default UserstoryList;
