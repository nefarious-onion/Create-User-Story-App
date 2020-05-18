import React from 'react';
import CreateEpicForm from '../CreateEpicForm/CreateEpicForm';

const LandingView = ({ onEpicCreate }) => {
    return (
        <div>
            <h1>Welcome to Create User Stories App!</h1>
            <p>Start by creating a new epic or choose an existing ones from the sidebar</p>
            <CreateEpicForm onEpicCreate={onEpicCreate} />
        </div>
    );
}

export default LandingView;
