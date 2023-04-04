import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/messages/dima' activeClassName = {s.activeLink}>dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/kirill' activeClassName = {s.activeLink}>kirill</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/kazah' activeClassName = {s.activeLink}>kazah</NavLink>
                </div>
            </div>
            <div className={s.message}>
                    kefteme
                </div>
        </div>
    )
}

export default Messages;