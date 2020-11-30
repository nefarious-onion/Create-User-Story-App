import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
//services, interfaces
import { getEpics, createEpic, deleteEpic } from '../services/api.service';
import { Epic, EpicData } from '../services/api.interface';
//components
import Sidebar from './Sidebar/Sidebar';
import Topnav from './Topnav/Topnav';
import LandingView from './LandingView/LandingView';
import EpicView from './Epicview/EpicView';
//styles
import './App.css';

const App = () => {
    const [epics, setEpics] = useState<Epic[]>([]);
    const [epicName, setEpicName] = useState('');
    const [error, setError] = useState<Error | null>(null)

    const fetchEpics = async () => {
        try {
            const _epics = await getEpics();
            setEpics(_epics)
        } catch (error) {
            setError(error)
        }
    }

    const onEpicCreate = async (epicTitle: EpicData['title']) => {
        const newEpic = {
            title: epicTitle
        }
        try {
            await createEpic(newEpic);
            console.log('create new epic', newEpic);
            fetchEpics();
        } catch (error) {
            setError(error);
        }
    }

    const onEpicLoad = (epic: Epic) => setEpicName(epic.title);

    const onEpicDelete = async (id: Epic['id']) => {
        try {
            await deleteEpic(id);
            setEpicName("");
            fetchEpics();
        } catch (error) {
            setError(error)
        }

    }

    useEffect(() => {
        getEpics()
            .then(epics => setEpics(epics))
            .catch(error => setError(error))
    }, []);

    return (
        <Router>
            <div className='container'>
                <Topnav title={epicName} />
                <div className='row'>
                    <Sidebar epics={epics} onEpicCreate={onEpicCreate} />
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
