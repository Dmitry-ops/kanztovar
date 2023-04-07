import React from 'react';
import s from './Profile.module.css';


export const Profile = () => {
  return (
    <div className= {s.content}>
      <div className= {s.img}>
      <img src='https://avatars.mds.yandex.net/i?id=4bfc48fae49788af24fbdfcb68f8445651b246d8-8340026-images-thumbs&n=13' />
      </div>
      <div className={s.about}>
        <h3>О Нас</h3>
      </div>
    </div>
  );
}

