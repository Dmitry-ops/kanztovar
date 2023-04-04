import React from 'react';
import Actual from './Actual';
import s from './News.module.css';
import like from './../../../../assents/like.jpg';
import karan from './../../../../assents/karan.avif';

const News = () => {
  return (
    <div className={s.content}>

      Новости
      <div className={s.news}>
        Добавить новость
        <div>
        <textarea></textarea>
        </div>
        <button>Добавить Новость</button>
      </div>
      <div>
      Актуальные новости
      <Actual/>
      <Actual text ={`В ожидании вашего заказа!)`} IMG = {like} LikesCount = {`15 `}/>
      <Actual text ={`Привет, мы открылись!)`} IMG = {karan} LikesCount = {`20 `}/>
      </div>
    </div>
    );
}

export default News;