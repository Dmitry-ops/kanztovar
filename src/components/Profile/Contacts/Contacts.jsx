import React from 'react';
import s from './Contacts.module.css';

export let Contacts = () => {
    return (
        <div className={s.item}>
            <div>
            <h2>Контакты</h2>
            </div>
            <div className={s.itemActual}>
            <div>
                Telegram
            </div>
            <div>
                Vk
            </div>
            </div>
        </div>
    )
}
