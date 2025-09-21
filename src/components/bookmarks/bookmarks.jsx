import React, { useEffect } from 'react'
import likeclick from "../../assets/img/likeclick.png"
import green from "../../assets/img/greenandwhite.png"; 
import plus from "../../assets/img/plus.png"; 
import classes from "../Card/Card.module.css"
import like from "../../assets/img/like.png"
import { useState } from 'react';
function Card({ onFavorite, imageUrl,title, shoponclick, onPlus,price,}) {
  const [isAdded, setIsAdded] = useState(false);
    const [favorites,setFavorites]=useState(false)
    
  
    const onUnLiked=()=>{
      setFavorites(!favorites)
  onFavorite({
     // нужно передать id из props!
    name: title, // используем title
    price: price,
    imageUrl: imageUrl,
  });}
  const onClickPlus = (obj) => {
    onPlus({
     
      name: title,
      price: price,
      imageUrl: imageUrl,
    });
    setIsAdded(!isAdded);
  };

  return (
    <div>
      
      <div className={classes.card}>
        <div className={classes.paddinglike}>
          <img
            src={favorites ? likeclick : like }
            alt=""
            className={classes.likebtn}
            onClick={onUnLiked}
            style={{border:'none'}}
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
