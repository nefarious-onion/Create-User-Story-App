import React from 'react';
import './Userstory.css';

interface UserstoryProps {
    title: string;
    id: string;
    onStoryClick: (id: string) => void;
}

const UserstoryItem: React.FunctionComponent<UserstoryProps> = ({ title, onStoryClick, id }) => {

    return (
        <div className='list__item' onClick={() => {
            console.log(id);
            onStoryClick(id);
        }
        }>
            <p>{title}</p>
        </div>
    );
}

export default UserstoryItem;
