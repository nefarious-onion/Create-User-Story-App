import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpic, createStory, deleteStory } from '../../services/api.service';
import UserstoryList from '../../components/UserstoryList/UserstoryList';
import CreateStoryForm from '../../components/CreateStoryForm/CreateStoryForm';
import { Epic, Userstory } from '../../services/api.interface';
import { NotificationObj } from '../../components/Notification/Notification';

interface EpicViewProps {
    onEpicLoad: (epic: Epic) => void;
    onEpicDelete: (epicId: Epic['id']) => void;
    showNotification: (notificationObj: NotificationObj) => void
}
type EpicRouteParams = { epicId: Epic['id'] }

const EpicView: React.FunctionComponent<EpicViewProps> = ({
    onEpicLoad,
    onEpicDelete,
    showNotification
}) => {
    let { epicId } = useParams<EpicRouteParams>();

    const [epic, setEpic] = useState<Epic | null>(null);
    const [stories, setStories] = useState<Userstory[]>([]);
    const [epicTitle, setEpicTitle] = useState('');

    const fetchStories = async () => {
        const _epic = await getEpic(epicId);
        if (_epic) {
            setEpic(_epic);
            setStories(_epic.stories);
            setEpicTitle(_epic.title);
        }
    }
    const onStoryCreate = async (title: Userstory['title']) => {
        try {
            const newStory = {
                title,
                epic: epicId
            }
            await createStory(newStory);
            fetchStories();
            showNotification({ type: 'success', message: `Created new user story` })
        } catch (error) {
            showNotification({ type: 'error', message: error.message })
        }
    }

    const onStoryDelete = async (storyId: string) => {
        try {
            await deleteStory(storyId);
            fetchStories();
            showNotification({ type: 'success', message: `Succesfully deleted the userstory` })
        } catch (error) {
            showNotification({ type: 'error', message: error.message })
        }
    }
    const handleEpicDelete = () => {
        if (window.confirm('Are you sure you want to delete this epic?')) {
            onEpicDelete(epicId);
            setEpic(null);
            setEpicTitle('');
            setStories([]);
        }
    }

    //fetches data according to epicId, listens to id change to trigger fetching again
    useEffect(() => {
        getEpic(epicId)
            .then(epic => {
                setEpic(epic);
                setStories(epic.stories);
                setEpicTitle(epic.title);
                onEpicLoad(epic);
            })
            .catch(error => console.log(error.message))
    }, [epicId]);

    return (

        <div className='col s6'>
            <div className='p-1'>
                <button
                    className='mb-2 waves-effect waves-light btn red darken-1 '
                    onClick={handleEpicDelete}
                >
                    Delete epic {epicTitle}
                </button>
                <CreateStoryForm onStoryCreate={onStoryCreate} />
                <UserstoryList
                    stories={stories}
                    onStoryDelete={onStoryDelete}
                />
            </div>
        </div >
    );
}

export default EpicView;
