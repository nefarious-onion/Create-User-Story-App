import React, { useState, useEffect } from 'react';
import { Userstory } from '../../services/api.interface';
import EditStoryForm from '../EditStoryForm/EditStoryForm';

interface EditStoryViewProps {
    story: Userstory;
    onStoryDelete: (storyId: Userstory['id']) => void
}

const EditStoryView: React.FunctionComponent<EditStoryViewProps> = ({ story, onStoryDelete }) => {
   
    let userstory = '';

    if (story) {
        userstory = story.title;
    }

    const onClick = () => {
        onStoryDelete(story.id);
    }

    return (
        <div className=''>
            <h2>Edit userstory:</h2>
            <p>{userstory}</p>
            <button className='button' onClick={onClick} >Delete Userstory</button>
            {/* <EditStoryForm /> */}
        </div>
    );
}

export default EditStoryView;
