import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName = {s.activeLink}>Главная</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/messages' activeClassName = {s.activeLink}>Сообщения</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' activeClassName = {s.activeLink}>Новости</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/contacts' activeClassName = {s.activeLink}>Контакты</NavLink>
      </div>
    </nav>
  );
}

