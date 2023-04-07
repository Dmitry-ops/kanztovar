import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className = {s.activeLink}>Главная</NavLink>
      </div>
      <div className={s.item + '' + s.activeLink}>
        <NavLink to='/messages' className = {s.activeLink}>Сообщения</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className = {s.activeLink}>Новости</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/contacts' className = {s.activeLink}>Контакты</NavLink>
      </div>
    </nav>
  );
}

