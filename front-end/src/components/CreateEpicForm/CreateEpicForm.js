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
                <h3>Create new Epic:</h3>
                <div className='form__input-field'>
                    <label>Name</label>
                    <input type='text' name='name' value={name} onChange={event => setName(event.target.value)} />
                </div>
                <input type='submit' value='Save Epic' />
            </form>


        </div>
    );
}

export default CreateEpicForm;
