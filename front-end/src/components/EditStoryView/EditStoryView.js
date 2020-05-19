import React, { useState, useEffect } from 'react';
import EditStoryForm from '../EditStoryForm/EditStoryForm';

const EditStoryView = ({ story, onStoryDelete }) => {
   
    let userstory = "";

    if (story) {
        userstory = story.title;
    }

    const onClick = () => {
        onStoryDelete();
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
