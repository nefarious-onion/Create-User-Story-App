import React from 'react';
import { Link } from "react-router-dom";
import { Epic } from '../../services/api.interface';

interface EpicListProps {
    epics: Epic[]
}

const EpicList: React.FunctionComponent<EpicListProps> = ({ epics }) => {

    const epicList = epics.map(epic => <Link
        to={`/epic/${epic.id}`}
        className='collection-item black-text'
        key={epic.id}
    >{epic.title}</Link>)

    return (
        <div className='collection'>
            {epicList}
        </div>

    );
}

export default EpicList;
