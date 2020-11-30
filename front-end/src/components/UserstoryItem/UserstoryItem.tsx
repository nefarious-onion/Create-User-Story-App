import React from 'react';

interface UserstoryProps {
    title: string;
    id: string;
    onStoryDelete: (id: string) => void;
}

const UserstoryItem: React.FunctionComponent<UserstoryProps> = ({
    title,
    id,
    onStoryDelete
}) => {

    return (
        <div className='collection-item'>
            <span>{title}</span>
            <div
                className='secondary-content'
                onClick={(event: React.MouseEvent<HTMLElement>) => onStoryDelete(id)}>
                <i className="material-icons red-text">clear</i>
            </div>
        </div >
    );
}

export default UserstoryItem;
