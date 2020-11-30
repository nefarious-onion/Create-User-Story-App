import React from 'react';
import CreateEpicForm from '../CreateEpicForm/CreateEpicForm';
import { EpicData } from '../../services/api.interface';

interface LandingviewProps {
    onEpicCreate: (title: EpicData['title']) => void
}

const LandingView: React.FunctionComponent<LandingviewProps> = ({ onEpicCreate }) => {
    return (
        <div className='landingview-container'>
            <h1>Welcome to Create User Stories App!</h1>
            <p>Start by creating a new epic or choose an existing one from the sidebar</p>
            <CreateEpicForm onEpicCreate={onEpicCreate} />
        </div>
    );
}
export default LandingView;
