import React from 'react';
import {Actual} from './Actual';
import s from './News.module.css';
import like from './../../../../assents/like.jpg';
import karan from './../../../../assents/karan.avif';

const News = () => {
  return (
    <div className={s.content}>

      <h3>Новости</h3>
      <div className={s.news}>
        <h4>Добавить новость</h4>
        <div>
        <textarea></textarea>
        </div>
        <button>Добавить Новость</button>
      </div>
      <div className={s.actual}>
      <h5>Актуальные новости</h5>
      </div>
      <div>
      <Actual text ={`В ожидании вашего заказа!)`} IMG = {like} LikesCount = {`15 `}/>
      <Actual text ={`Привет, мы открылись!)`} IMG = {karan} LikesCount = {`20 `}/>
      </div>
    </div>
    );
}

export default News;