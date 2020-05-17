import React, { useState, useEffect } from 'react';
import { getStories } from '../services/userstory.service';
import UserstoryList from './UserstoryList/UserstoryList';

const App = () => {
    const [stories, setStories] = useState([]);

    // const fetchStories = async () => {
    //     const _stories = await getStories();
    //     setStories(_stories);
    // }

    useEffect(() => {
        getStories()
            .then(stories => setStories(stories))
    }, []);

    return (
        <div>
            <UserstoryList stories={stories}/>
        </div>
    );
}

export default App;
