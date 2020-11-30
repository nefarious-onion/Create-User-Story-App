import React from 'react';
import CreateEpicForm from '../CreateEpicForm/CreateEpicForm';
import EpicList from '../EpicList/EpicList';
import { Epic, EpicData } from '../../services/api.interface';

interface SideNavProps {
    epics: Epic[];
    onEpicCreate: (title: EpicData['title']) => void
}
const SideNav: React.FunctionComponent<SideNavProps> = ({
    epics,
    onEpicCreate
}) => {

    return (
        <div className='col s4'>
            <CreateEpicForm onEpicCreate={onEpicCreate} />
            <EpicList epics={epics} />
        </div>
    );
}

export default SideNav;
