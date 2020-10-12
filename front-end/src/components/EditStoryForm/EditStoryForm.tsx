import React, { useState } from 'react';

const EditStoryForm = () => {
    const [storyUser, setStoryUser] = useState('');
    const [storyWant, setStoryWant] = useState('');
    const [storyValue, setStoryValue] = useState('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userstory = `As a ${storyUser}, I want to ${storyWant}, so that ${storyValue}`;
        console.log(userstory);
        //onStoryCreate(userstory);
        setStoryUser('');
        setStoryWant('');
        setStoryValue('');
    }

    return (
        <div>
            <form className='userstory-form' onSubmit={onSubmit}>
                <div className='form__input-field'>
                    <label>As a</label>
                    <input className='user__input' type='text' name='storyUser' value={storyUser} onChange={event => setStoryUser(event.target.value)} required />
                </div>
                <div className='form__input-field'>
                    <label>I want to</label>
                    <input className='user__input' type='text' name='storyWant' value={storyWant} onChange={event => setStoryWant(event.target.value)} required />
                </div>
                <div className='form__input-field'>
                    <label>so that</label>
                    <input className='user__input' type='text' name='storyValue' value={storyValue} onChange={event => setStoryValue(event.target.value)} required />
                </div>
                <input type='submit' value='Save changes' className='button submit-userstory-button' />
            </form>
        </div>
    );
}

export default EditStoryForm;
