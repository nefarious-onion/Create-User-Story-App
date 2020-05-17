import React from 'react';
import Userstory from '../Userstory/Userstory';

const UserstoryList = ({stories}) => {

    const storyList = stories.map(story => <Userstory key={story._id} title={story.title}/>)

    return (
        <>
        {storyList}
        </>
    );
}

export default UserstoryList;
