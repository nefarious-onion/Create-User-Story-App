import React from 'react';

const styles = {
    "success": {
        backgroundColor: ' lightgreen',
        color: 'darkgreen',
        border: '2px solid darkgreen',
        width: '50%',
        padding: '.5rem',
        marginBottom: '1rem',
        fontSize: '1.5rem'
    },
    "error": {
        backgroundColor: 'lightcoral',
        color: 'darkred',
        border: ' 2px solid darkred',
        width: '50%',
        padding: '.5rem',
        marginBottom: '1rem',
        fontSize: '1.5rem'
    }
}

export interface NotificationObj {
    type: 'success' | 'error';
    message: string;
}

interface NotificationProps {
    notification: NotificationObj;
}

const Notification: React.FunctionComponent<NotificationProps> = ({ notification }) => {
    const { type, message } = notification;
    const notificationStyle = styles[type];

    return (
        <div style={notificationStyle} className='col s6'>
            {message}
        </div>
    );
}

export default Notification;