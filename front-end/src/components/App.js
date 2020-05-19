import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { getEpics, createEpic } from '../services/api.service';
import Sidebar from './Sidebar/Sidebar';
import Topnav from './Topnav/Topnav';
import LandingView from './LandingView/LandingView';
import EpicView from './Epicview/EpicView';
import './App.css';

const App = () => {
    // const [stories, setStories] = useState([]);
    const [epics, setEpics] = useState([]);
    const [epicName, setEpicName] = useState();

    // const fetchStories = async () => {
    //     const _stories = await getStories();
    //     setStories(_stories);
    // }
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
                            <EpicView onEpicLoad={onEpicLoad} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
