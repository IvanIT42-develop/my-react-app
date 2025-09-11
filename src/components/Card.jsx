import React from 'react'
import likeclick from "../assets/img/likeclick.png"
import green from "../assets/img/greenandwhite.png"; 
import plus from "../assets/img/plus.png"; 

function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="card">
        <div className="paddinglike">
          <img src={likeclick} alt="" className="likebtn onclicklike" />
          
        </div>

        <img
          src={props.imageUrl}
          alt=""
          width={133}
          height={112}
          className="greensneak"
        />
        <span className="span1">{props.title}</span>
        <div className="priceandadd">
          <div>
            <h4 className="h42">Цена:</h4>
            <span>12999 руб.</span>
          </div>
          <div className="plusbtn padding">
            <img src={plus} alt="" className=" padding" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
