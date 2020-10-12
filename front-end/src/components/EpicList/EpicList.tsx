import React from 'react';
import { Link } from "react-router-dom";
import { Epic } from '../../services/api.interface';

interface EpicListProps {
    epics: Epic[]
}

const EpicList: React.FunctionComponent<EpicListProps> = ({ epics }) => {

    const epicList = epics.map(epic => <Link to={`/epic/${epic.id}`} className='list__item' key={epic.id}>{epic.title}</Link>)

    return (
        <div className='epiclist list-container'>
            {epicList}
        </div>

    );
}

export default EpicList;
