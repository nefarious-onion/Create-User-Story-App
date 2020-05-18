import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpic, createStory } from '../../services/app.service';
import UserstoryList from '../UserstoryList/UserstoryList';
import CreateStoryForm from '../CreateStoryForm/CreateStoryForm';

const EpicView = ({ onEpicLoad }) => {
    const [epic, setEpic] = useState();
    const [stories, setStories] = useState([]);

    let { epicId } = useParams();

    const fetchStories = async () => {
        const _epic = await getEpic(epicId);
        setEpic(_epic);
        setStories(_epic.stories);
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
            onEpicLoad(epic);
        })
    }, [epicId]);

    return (
        <div>
            <CreateStoryForm onStoryCreate={onStoryCreate} />
            <UserstoryList stories={stories} />
        </div>
    );
}

export default EpicView;
