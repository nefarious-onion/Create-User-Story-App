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
        <div className='row'>
            <form className='col s12' onSubmit={onSubmit} >
                <div className='input-field'>
                    <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={({ target }) => setTitle(target.value)} />
                    <label htmlFor='title'>EPIC NAME</label>
                </div>
                <button type='submit' className='waves-effect waves-light btn green darken-1'>Add new Epic </button>
            </form>
        </div>
    );
}

export default CreateEpicForm;
