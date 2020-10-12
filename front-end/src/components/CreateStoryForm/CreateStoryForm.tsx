import React, { useState, useRef, useEffect } from 'react';
import { Userstory } from '../../services/api.interface';
import './CreateStoryForm.css';

interface CreateStoryFormProps {
    onStoryCreate: (title: Userstory['title']) => void
}

const CreateStoryForm: React.FunctionComponent<CreateStoryFormProps> = ({ onStoryCreate }) => {
    //const [userInput, setUserInput] = useState("");
    const [storyUser, setStoryUser] = useState('');
    const [storyWant, setStoryWant] = useState('');
    const [storyValue, setStoryValue] = useState('');

    const inputElement = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log('does this happen?')
        setTimeout(() => {
            console.log('this is timeout');
            if (inputElement.current) {
                inputElement.current.focus();
            } 
        }, 400);
    }, []);
    
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const title = `As a ${storyUser}, I want to ${storyWant}, so that ${storyValue}`;
        console.log(title);

        onStoryCreate(title);
        setStoryUser('');
        setStoryWant('');
        setStoryValue('');
        if (inputElement.current) {
            inputElement.current.focus();
        } 
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
