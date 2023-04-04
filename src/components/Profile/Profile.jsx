import React from 'react';
import Actual from './ActualNews/News/Actual';
import News from './ActualNews/News/News';
import s from './Profile.module.css';

import './../../App.css';

const Profile = () => {
  return (
    <div className= {s.content}>
      <div className= {s.img}>
      <img src='https://avatars.mds.yandex.net/i?id=4bfc48fae49788af24fbdfcb68f8445651b246d8-8340026-images-thumbs&n=13' />
      </div>
      <div>
        О Нас
      </div>
     
      
    </div>
  );
}

export default Profile;