import React from "react";
import headerreSneakers from "../assets/img/headersneakers.png";
import "../App.css";
import purchases from "../assets/img/purchases.png";
import like from "../assets/img/like.png";
import profile from "../assets/img/profile.png";
import green from "../assets/img/greenandwhite.png";
import plus from "../assets/img/plus.png";
import black from "../assets/img/black.png";
import blackandblue from "../assets/img/blackandblue.png";
import manycolor from "../assets/img/manycolor.png";
import onlysalat from "../assets/img/onlysalat.png";
import orangeandsalat from "../assets/img/orangeandsalat.png";
import white from "../assets/img/white.png";
import whiteandblack from "../assets/img/whiteandblack.png";
import yellow from "../assets/img/yellow.png";
import blackandred from "../assets/img/blackandred.png";
import blackandwhitenike from "../assets/img/blackandwhitenike.png";
import search from "../assets/img/search.png";
import Header from "../components/Header";
import shoponclick from "../assets/img/shoponclick.png";
import btnremove from "../assets/img/btn-remove.png";
import arrow from "../assets/img/arrow.png";
import Card from "./Card/Card";
function Drawer(props) {
  return (
    <div  className="overlay">
      <div>
        <div className="drawer">
          <h2>
            Корзина{" "}
            <img
              src={btnremove}
              alt=""
              width={32}
              height={32}
              className="btnremove"
             onClick={props.onCloseCard}
            />
          </h2>

          <div className="items">
            <div className="cartItem margin1">
              <div
                className="cartItemImg"
                style={{
                  backgroundImage: `url(${whiteandblack})`,
                  height: 70,
                  width: 70,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div>
                <p className="p1">Мужские Кроссовки Nike Air Max 270 </p>
                <b className="b1">12 999руб.</b>
              </div>
              <img
                src={btnremove}
                alt=""
                width={32}
                height={32}
                className="btnremove"
              />
            </div>
            <div className="cartItem">
              <div
                className="cartItemImg"
                style={{
                  backgroundImage: `url(${whiteandblack})`,
                  height: 70,
                  width: 70,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div>
                <p className="p1">Мужские Кроссовки Nike Air Max 270 </p>
                <b className="b1">12 999руб.</b>
              </div>
              <img
                src={btnremove}
                alt=""
                width={32}
                height={32}
                className="btnremove"
              />
            </div>
          </div>
          <div>
            <div className="cartTotalBlock">
              <ul>
                <li className="endprice">
                  <span>Итого:</span>
                  <div className="dashedline"></div>
                  <b>20 498 руб.</b>
                </li>
                <li className="endprice">
                  <span>Налог 5%</span>
                  <div className="dashedline"></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <div className="centergreenbtn">
                <button className="ligtengreen">
                  Оформить заказ <img src={arrow} alt="" className="arrowpng" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
