import React, { useState, useEffect } from 'react';
import { Userstory } from '../../services/api.interface';

interface CreateStoryFormProps {
    onStoryCreate: (title: Userstory['title']) => void
}

const CreateStoryForm: React.FunctionComponent<CreateStoryFormProps> = ({ onStoryCreate }) => {
    const [storyPersona, setStoryPersona] = useState('');
    const [storyWant, setStoryWant] = useState('');
    const [storyValue, setStoryValue] = useState('');

    //declare a ref to DOM element (first input)
    const inputElement = React.useRef<HTMLInputElement>(null);

    //set focus on input element so that user can start typing user stories
    //! works when component re-renders but not on first render. why???
    useEffect(() => {
        if (inputElement.current) inputElement.current.focus();
    }, []);

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const title = `As a ${storyPersona}, I want to ${storyWant}, so that ${storyValue}`;

        onStoryCreate(title);
        setStoryPersona('');
        setStoryWant('');
        setStoryValue('');
        //focus back to top input element on submit
        if (inputElement.current) inputElement.current.focus();

    }

    return (
        <div className='row'>
            <form className='col s12' onSubmit={onSubmit}>
                <div className="row">
                    <div className='input-field col s12'>
                        <label htmlFor='storyUser'>As a</label>
                        <input
                            type='text'
                            name='storyUser'
                            value={storyPersona}
                            onChange={({ target }) => setStoryPersona(target.value)}
                            ref={inputElement}
                            required />
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <label>I want to</label>
                        <input
                            type='text' name='storyWant'
                            value={storyWant}
                            onChange={({ target }) => setStoryWant(target.value)}
                            required />
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s12'>
                        <label>so that</label>
                        <input
                            type='text' name='storyValue'
                            value={storyValue}
                            onChange={({ target }) => setStoryValue(target.value)}
                            required />
                    </div>
                </div>
                <div className='row'>
                    <div className=' col s12'>
                        <button
                            type='submit'
                            className=' button btn waves-effect waves-light green darken-1'>
                            Add user story
                </button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default CreateStoryForm;
