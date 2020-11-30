import React, { useState } from 'react';
import { EpicData } from '../../services/api.interface';

interface CreateEpicFormProps {
    onEpicCreate: (title: EpicData['title']) => void
}

const CreateEpicForm: React.FunctionComponent<CreateEpicFormProps> = ({ onEpicCreate }) => {
    const [title, setTitle] = useState<EpicData['title']>('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const isTitleValid = title && title.length > 2;
        if (title && isTitleValid) {
            onEpicCreate(title);
            setTitle('');
        }
    }

    return (
        <div className='form-container'>
            <form className='epic-form' onSubmit={onSubmit} >
                <div className='input-field'>
                    <input type='text' name='title' value={title} onChange={({ target }) => setTitle(target.value)} />
                    <label htmlFor='title'>EPIC NAME</label>
                </div>
                <input type='submit' value='Add new Epic' className='button submit-epic-button' />
            </form>
        </div>
    );
}

export default CreateEpicForm;
