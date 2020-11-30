import React from 'react';
import CreateEpicForm from '../CreateEpicForm/CreateEpicForm';
import EpicList from '../EpicList/EpicList';
import { Epic, EpicData } from '../../services/api.interface';

interface SideBarProps {
    epics: Epic[];
    onEpicCreate: (title: EpicData['title']) => void
}
const Sidebar: React.FunctionComponent<SideBarProps> = ({ epics, onEpicCreate }) => {

    return (
        <div className='col s4 sidebar-container'>
            <CreateEpicForm onEpicCreate={onEpicCreate} />
            <EpicList epics={epics} />
        </div>
    );
}

export default Sidebar;
