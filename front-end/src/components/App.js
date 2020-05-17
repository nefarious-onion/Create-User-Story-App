import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { getEpics } from '../services/app.service';
import UserstoryList from './UserstoryList/UserstoryList';
import Sidebar from './Sidebar/Sidebar';

const App = () => {
    // const [stories, setStories] = useState([]);
    const [epics, setEpics] = useState([]);

    // const fetchStories = async () => {
    //     const _stories = await getStories();
    //     setStories(_stories);
    // }

    useEffect(() => {
        getEpics()
            .then(epics => setEpics(epics))
    }, []);

    return (
        <Router>
            <div className='app-container'>
                <Sidebar epics={epics} />
                {/* <UserstoryList stories={stories}/> */}
            </div>
        </Router>
    );
}

export default App;
