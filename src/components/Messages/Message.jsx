import React from 'react';
import s from './Messages.module.css';

export const MessageItem = (props) => {
    return (
        <div className={s.dialog}>
        {props.message}
    </div> 
    )
}