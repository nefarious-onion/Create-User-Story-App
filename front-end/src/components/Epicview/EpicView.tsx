import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpic, createStory, getStory, deleteStory } from '../../services/api.service';
import UserstoryList from '../UserstoryList/UserstoryList';
import CreateStoryForm from '../CreateStoryForm/CreateStoryForm';
import { Epic, Userstory } from '../../services/api.interface';

interface EpicViewProps {
    onEpicLoad: (epic: Epic) => void;
    onEpicDelete: (epicId: Epic['id']) => void;
}
type EpicRouteParams = { epicId: Epic['id'] }

const EpicView: React.FunctionComponent<EpicViewProps> = ({ onEpicLoad, onEpicDelete }) => {
    let { epicId } = useParams<EpicRouteParams>();

    const [epic, setEpic] = useState<Epic | null>(null);
    const [stories, setStories] = useState<Userstory[]>([]);
    const [epicTitle, setEpicTitle] = useState('');
    const [storyId, setStoryId] = useState<Userstory['id']>('');
    const [error, setError] = useState<Error | null>(null)

    //! Olisko epicTitle parempi hanskata joko useEffectillä tai ottaa se tosta samasta datasta ku kaikki muukin?
    const fetchStories = async () => {
        const _epic = await getEpic(epicId);
        if (_epic) {
            setEpic(_epic);
            setStories(_epic.stories);
            setEpicTitle(_epic.title);
        }
    }
    const onStoryCreate = async (title: Userstory['title']) => {
        const newStory = {
            title,
            epic: epicId
        }
        try {
            await createStory(newStory);
            fetchStories();
        } catch (error) {
            setError(error)
        }
    }

    const onStoryDelete = async (storyId: string) => {
        try {
            await deleteStory(storyId);
            fetchStories();
        } catch (error) {
            setError(error)
        }
    }
    const onDeleteClick = () => {
        if (window.confirm('Are you sure you want to delete this epic?')) {
            onEpicDelete(epicId);
            setEpic(null);
            setEpicTitle('');
            setStories([]);
        }
    }

    useEffect(() => {
        getEpic(epicId).then(epic => {
            setEpic(epic);
            setStories(epic.stories);
            setEpicTitle(epic.title);
            onEpicLoad(epic);
            setStoryId('');
        })
            .catch(error => setError(error))
    }, [epicId]);

    return (

        <div className='col s6'>
            <div className='p-1'>
                <button
                    className='mb-2 waves-effect waves-light btn red darken-1 '
                    onClick={onDeleteClick} >Delete epic {epicTitle}
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
