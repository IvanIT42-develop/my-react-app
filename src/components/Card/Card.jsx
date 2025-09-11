import React from 'react'
import likeclick from "../../assets/img/likeclick.png"
import green from "../../assets/img/greenandwhite.png"; 
import plus from "../../assets/img/plus.png"; 
import classes from "../Card/Card.module.css"
function Card(props) {

  return (
    <div>
      <div className={classes.card}>
        <div className={classes.paddinglike}>
          <img
            src={likeclick}
            alt=""
            className={ classes.likebtn}
          />
        </div>

        <img
          src={props.imageUrl}
          alt=""
          width={133}
          height={112}
          className={classes.greensneak}
        />
        <span className={classes.span1}>{props.title}</span>

        <div className={classes.priceandadd}>
          <div>
            <h4 className={classes.h42}>Цена:</h4>
            <span>12999 руб.</span>
          </div>
          <div className={`${classes.plusbtn} ${classes.padding}`}>
            <img
              src={plus}
              alt=""
              className={classes.padding}
              onClick={props.onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
