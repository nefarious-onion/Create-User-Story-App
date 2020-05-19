import React from 'react';
import Userstory from '../Userstory/Userstory';
import './UserstoryList.css';


const UserstoryList = ({ stories, onStoryClick }) => {

    const storyList = stories.map(story => <Userstory id={story._id} onStoryClick={onStoryClick} key={story._id} title={story.title} />)

    return (
        <div className='list-container'>
            {storyList}
        </div>
    );
}

export default UserstoryList;
