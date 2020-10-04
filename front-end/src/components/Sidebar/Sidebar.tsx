import React from 'react';
//import {Link} from "react-router-dom";
import CreateEpicForm from '../CreateEpicForm/CreateEpicForm';
import './Sidebar.css';
import EpicList from '../EpicList/EpicList';

const Sidebar = ({epics, onEpicCreate }) => {


//const epicList = epics.map(epic => <Link to={`/epic/${epic._id}`} className='sidebar__list-item' key={epic._id}>{epic.title}</Link>)
    return (
        <div className='sidebar-container'>
            <CreateEpicForm onEpicCreate={onEpicCreate}/>
            <EpicList epics={epics}/>
        </div>
    );
}

export default Sidebar;
