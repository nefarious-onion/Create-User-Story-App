import React from 'react';
//import {Link} from "react-router-dom";
import CreateEpicForm from '../CreateEpicForm/CreateEpicForm';
import './Sidebar.css';
import EpicList from '../EpicList/EpicList';
import { Epic, EpicData } from '../../services/api.interface';

interface SideBarProps {
    epics: Epic[];
    onEpicCreate: (title: EpicData['title']) => void
}
const Sidebar: React.FunctionComponent<SideBarProps> = ({epics, onEpicCreate }) => {

    return (
        <div className='sidebar-container'>
            <CreateEpicForm onEpicCreate={onEpicCreate}/>
            <EpicList epics={epics}/>
        </div>
    );
}

export default Sidebar;
