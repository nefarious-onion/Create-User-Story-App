import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { getEpics, createEpic, deleteEpic } from '../services/api.service';
import Sidebar from './Sidebar/Sidebar';
import Topnav from './Topnav/Topnav';
import LandingView from './LandingView/LandingView';
import EpicView from './Epicview/EpicView';
import './App.css';

const App = () => {
    const [epics, setEpics] = useState([]);
    const [epicName, setEpicName] = useState();

    const fetchEpics = async () => {
        const _epics = await getEpics();
        setEpics(_epics)
    }

    const onEpicCreate = async (newEpic) => {
        console.log('create new epic', newEpic);

        await createEpic(newEpic);
        fetchEpics();
    }

    const onEpicLoad = epic => setEpicName(epic.title);

    const onEpicDelete = async (id) => {
        await deleteEpic(id);
        setEpicName("");
        fetchEpics();
    }

    useEffect(() => {
        getEpics()
            .then(epics => setEpics(epics))
    }, []);

    return (
        <Router>
            <div className='app-container'>
                <Topnav title={epicName} />
                <div className='main-content'>
                    <Sidebar className='sidebar' epics={epics} onEpicCreate={onEpicCreate} />
                    <Switch>
                        <Route path='/' exact >
                            <LandingView onEpicCreate={onEpicCreate} />
                        </Route>
                        <Route path='/epic/:epicId'>
                            <EpicView onEpicLoad={onEpicLoad} onEpicDelete={onEpicDelete} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
