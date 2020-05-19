import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpic, createStory } from '../../services/api.service';
import UserstoryList from '../UserstoryList/UserstoryList';
import CreateStoryForm from '../CreateStoryForm/CreateStoryForm';

const EpicView = ({ onEpicLoad }) => {
    const [epic, setEpic] = useState();
    const [stories, setStories] = useState([]);
    const [epicTitle, setEpicTitle] = useState("");

    let { epicId } = useParams();

    const fetchStories = async () => {
        const _epic = await getEpic(epicId);
        setEpic(_epic);
        setStories(_epic.stories);
        setEpicTitle(epic.title);
    }
    const onStoryCreate = async (newstory) => {
        console.log('create new story', newstory);

        await createStory(newstory, epicId);
        fetchStories();
    }

    useEffect(() => {
        getEpic(epicId).then(epic => {
            setEpic(epic);
            setStories(epic.stories);
            setEpicTitle(epic.title);
            onEpicLoad(epic);
        })
    }, [epicId]);

    return (
        <div className='epicview-container'>
            <div className='epicview__title'>
            <p>Create userstories for {epicTitle} </p>
            </div>
            <CreateStoryForm onStoryCreate={onStoryCreate} />
            <UserstoryList stories={stories} />
        </div>
    );
}

export default EpicView;
