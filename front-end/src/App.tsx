import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
//services, interfaces
import { getEpics, createEpic, deleteEpic } from './services/api.service';
import { Epic, EpicData } from './services/api.interface';
//views
import LandingView from './views/LandingView/LandingView';
import EpicView from './views/Epicview/EpicView';
//components
import SideNav from './components/SideNav/SideNav';
import Topnav from './components/Topnav/Topnav';
import Notification, { NotificationObj } from './components/Notification/Notification';

const App = () => {
    const [epics, setEpics] = useState<Epic[]>([]);
    const [epicName, setEpicName] = useState('');
    const [notification, setNotification] = useState<NotificationObj>()

    //helper function for fetching epics from db and triggering re-render
    const fetchEpics = async () => {
        try {
            const _epics = await getEpics();
            setEpics(_epics)
        } catch (error) {
            console.log(error.message);
        }
    }

    //! new notification cancels the old, but not the timer => disappears too quickly
    const showNotification = (notificationObj: NotificationObj) => {
        setNotification(notificationObj);
        setTimeout(() => {
            setNotification(undefined)
        }, 5000);
    }

    const onEpicCreate = async (epicTitle: EpicData['title']) => {
        const newEpic = {
            title: epicTitle
        }
        try {
            await createEpic(newEpic);
            fetchEpics();
            showNotification({ type: 'success', message: `Created new epic ${epicTitle}` })
        } catch (error) {
            showNotification({ type: 'error', message: error })
        }
    }

    //renders epicname to navbar
    const onEpicLoad = (epic: Epic) => setEpicName(epic.title);

    const onEpicDelete = async (id: Epic['id']) => {
        try {
            await deleteEpic(id);
            setEpicName('');
            fetchEpics();
            showNotification({ type: 'success', message: `Succesfully deleted epic` })
        } catch (error) {
            showNotification({ type: 'error', message: error })
        }
    }

    useEffect(() => {
        getEpics()
            .then(epics => setEpics(epics))
            .catch(error => console.log(error.message))
    }, []);

    return (
        <Router>
            <div className='container'>
                <Topnav title={epicName} />
                <div className='row'>
                    <SideNav epics={epics} onEpicCreate={onEpicCreate} />
                    {notification && (<Notification notification={notification} />)}
                    <Switch>
                        <Route path='/' exact >
                            <LandingView onEpicCreate={onEpicCreate} />
                        </Route>
                        <Route path='/epic/:epicId'>
                            <EpicView onEpicLoad={onEpicLoad} onEpicDelete={onEpicDelete} showNotification={showNotification} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
