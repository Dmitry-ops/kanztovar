import React from 'react';
import { DialogItem } from './Dialog';
import { MessageItem } from './Message';
import s from './Messages.module.css';

export const Messages = (props) => {
    return (

        <div className={s.dialogs}>
            <DialogItem />
            <div className={s.dialogsItems}>
                <DialogItem name='dima' id='1' />
                <DialogItem name='kirill' id='2' />
                <DialogItem name='kazah' id='3' />
            </div>
            <div className={s.messages}>
                <MessageItem />
                <MessageItem message='hello everybody' />
                <MessageItem message='pizdec' />
                <MessageItem message='aboba' />
            </div>
        </div>
    )
}

