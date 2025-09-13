import React, { useEffect } from 'react'
import likeclick from "../../assets/img/likeclick.png"
import green from "../../assets/img/greenandwhite.png"; 
import plus from "../../assets/img/plus.png"; 
import classes from "../Card/Card.module.css"
import { useState } from 'react';
function Card({ onFavorite, imageUrl,title, shoponclick, onPlus,price,}) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = (obj) => {
    onPlus({
       // Добавляем ID
      name: title,
      price: price,
      imageUrl:imageUrl
    });
    setIsAdded(!isAdded);
  };
  return (
    <div>
      <div></div>
      <div className={classes.card}>
        <div className={classes.paddinglike}>
          <img
            src={likeclick}
            alt=""
            className={classes.likebtn}
            onClick={onFavorite}
          />
        </div>

        <img
          src={imageUrl}
          alt=""
          width={133}
          height={112}
          className={classes.greensneak}
        />
        <span className={classes.span1}>{title}</span>

        <div className={classes.priceandadd}>
          <div>
            <h4 className={classes.h42}>Цена:</h4>
            <span>12999 руб.</span>
          </div>
          <div className={`${classes.plusbtn} ${classes.padding}`}>
            <img
              src={isAdded ? shoponclick : plus}
              alt=""
              className={classes.padding}
              onClick={onClickPlus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
