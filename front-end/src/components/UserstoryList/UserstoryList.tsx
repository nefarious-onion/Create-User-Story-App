import React from 'react';
import UserstoryItem from '../UserstoryItem/UserstoryItem';
import './UserstoryList.css';
import { Userstory } from '../../services/api.interface';

interface UserstortyListProps  {
    stories: Userstory[];
    onStoryClick: (id: string) => void;
}

const UserstoryList: React.FunctionComponent<UserstortyListProps> = ({ stories, onStoryClick }) => {

    const storyList = stories.map(story => <UserstoryItem id={story.id} onStoryClick={onStoryClick} key={story.id} title={story.title} />)

    return (
        <div className='list-container'>
            {storyList}
        </div>
    );
}

export default UserstoryList;
