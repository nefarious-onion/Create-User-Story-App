import React, { useState, useRef } from 'react';
import './CreateStoryForm.css';

const CreateStoryForm = ({ onStoryCreate }) => {
    //const [userInput, setUserInput] = useState("");
    const [storyUser, setStoryUser] = useState("");
    const [storyWant, setStoryWant] = useState("");
    const [storyValue, setStoryValue] = useState("");

    const inputElement = useRef(null);
    
    const onSubmit = event => {
        event.preventDefault();

        const userstory = `As a ${storyUser}, I want to ${storyWant}, so that ${storyValue}`;
        console.log(userstory);

        onStoryCreate(userstory);
        setStoryUser("");
        setStoryWant("");
        setStoryValue("");
        inputElement.current.focus();
    }

    return (
        <div className='form-container'>
            <form className='userstory-form' onSubmit={onSubmit}>
                <div className='form__input-field'>
                    <label>As a</label>
                    <input className='user__input' type='text' name='storyUser' value={storyUser} onChange={event => setStoryUser(event.target.value)} autoFocus ref={inputElement} required/>
                </div>
                <div className='form__input-field'>
                    <label>I want to</label>
                    <input  className='user__input' type='text' name='storyWant' value={storyWant} onChange={event => setStoryWant(event.target.value)} required/>
                </div>
                <div className='form__input-field'>
                    <label>so that</label>
                    <input  className='user__input' type='text' name='storyValue' value={storyValue} onChange={event => setStoryValue(event.target.value)} required/>
                </div>
                <input type='submit' value='Add userstory' className='button submit-userstory-button'/>
            </form>

        </div>
    );
}

export default CreateStoryForm;
