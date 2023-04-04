import React from 'react';
import s from './News.module.css';

function Actual(props: any) {
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

export default Actual;