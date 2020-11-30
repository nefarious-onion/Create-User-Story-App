import React from 'react';
import CreateEpicForm from '../CreateEpicForm/CreateEpicForm';
import { EpicData } from '../../services/api.interface';

interface LandingviewProps {
    onEpicCreate: (title: EpicData['title']) => void
}

const LandingView: React.FunctionComponent<LandingviewProps> = ({ onEpicCreate }) => {
    return (
        <div className='col s6'>
            <h2 className='header-font'>WELCOME TO CREATE USER STORIES APP</h2>
            <p>Start by creating a new epic or choose an existing one from the sidebar.</p>
            <p>In the future, you will be able to export the list of user stories and save them to your computer or to your favourite team amanagement application</p>
            <CreateEpicForm onEpicCreate={onEpicCreate} />
        </div>
    );
}
export default LandingView;
