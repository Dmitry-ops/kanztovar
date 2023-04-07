import React from 'react';
import s from './News.module.css';

export const Actual = (props) => {
  return (
    <div className={s.content}>
          <img src={props.IMG}/>
        <span>
          {props.text}
        </span>
        <div className={s.item}>
          {props.LikesCount}
          like 
        </div>
    </div>

  );
}

