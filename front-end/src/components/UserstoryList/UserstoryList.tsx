import React from 'react';
import UserstoryItem from '../UserstoryItem/UserstoryItem';
import { Userstory } from '../../services/api.interface';

interface UserstortyListProps {
    stories: Userstory[];
    onStoryDelete: (id: string) => void;
}

const UserstoryList: React.FunctionComponent<UserstortyListProps> = ({
    stories,
    onStoryDelete
}) => {

    const storyList = stories.map(story => <UserstoryItem
        id={story.id}
        key={story.id}
        title={story.title}
        onStoryDelete={onStoryDelete}
    />)

    return (
        <div className='collection'>
            {storyList}
        </div>
    );
}

export default UserstoryList;
