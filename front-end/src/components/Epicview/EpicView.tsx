import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpic, createStory, getStory, deleteStory } from '../../services/api.service';
import UserstoryList from '../UserstoryList/UserstoryList';
import CreateStoryForm from '../CreateStoryForm/CreateStoryForm';
import EditStoryView from '../EditStoryView/EditStoryView';
import './EpicView.css';

const EpicView = ({ onEpicLoad, onEpicDelete }) => {
    const [epic, setEpic] = useState();
    const [stories, setStories] = useState([]);
    const [epicTitle, setEpicTitle] = useState("");
    const [editVisible, setEditVisible] = useState(false);
    const [storyId, setStoryId] = useState("");
    const [story, setStory] = useState("");

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

    const onStoryClick = async (id) => {
        setEditVisible(true);
        setStoryId(id);
    }

    const onStoryDelete = async () => {
        await deleteStory(epicId, storyId);
        setStoryId("");
        setStory("");
        setEditVisible(false);
        fetchStories();
    }
    const onDeleteClick = (event) => {
        if (window.confirm('Are you sure you want to delete this epic?'))  {
            onEpicDelete(epicId);
            setEpic("")
            setEpicTitle("");
            setStories([]);
        }
    }

    useEffect(() => {
        getEpic(epicId).then(epic => {
            setEpic(epic);
            setStories(epic.stories);
            setEpicTitle(epic.title);
            onEpicLoad(epic);
            setStoryId("");
        })
    }, [epicId]);

    useEffect(() => {
        getStory(epicId, storyId).then(userstory => {
            setStory(userstory);
        })
    }, [storyId]);

    return (

        <div className='epicview-container'>
            <div className='userstoryview-container'>
                <button className='button delete-button' onClick={onDeleteClick} >Delete epic {epicTitle}</button>
            <CreateStoryForm onStoryCreate={onStoryCreate} />
            <UserstoryList stories={stories} onStoryClick={onStoryClick} />
        </div>
        <div className='editview-container'>
            {
                story && (
                    <EditStoryView story={story} onStoryDelete={onStoryDelete} />
                )
            }
            {/* <EditStoryView editVisible={editVisible} storyId={storyId} epicId={epicId} onStoryDelete={onStoryDelete} /> */}
        </div>
        </div >
    );
}

export default EpicView;
