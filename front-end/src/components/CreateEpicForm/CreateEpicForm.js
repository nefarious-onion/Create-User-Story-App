import React, { useState } from 'react';

const CreateEpicForm = ({ onEpicCreate }) => {
    const [name, setName] = useState("");

    const onSubmit = event => {
        event.preventDefault();

        const isNameValid = name.length > 2;
        if (isNameValid) {
            setName("");
            onEpicCreate(name);
        }
    }

    return (
        <div className='form-container'>
            <form className='epic-form' onSubmit={onSubmit} >
                <h4>Create new Epic:</h4>
                <div className='form__input-field'>
                    <input type='text' name='name' value={name} onChange={event => setName(event.target.value)} />
                </div>
                <input type='submit' value='Save Epic' className='button submit-epic-button' />
            </form>


        </div>
    );
}

export default CreateEpicForm;
