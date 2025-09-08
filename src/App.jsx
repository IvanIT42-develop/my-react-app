import headerreSneakers from './assets/img/headersneakers.png'
import './App.css'
import purchases from './assets/img/purchases.png'
import like from "./assets/img/like.png";
import profile from "./assets/img/profile.png"; 
import green from "./assets/img/greenandwhite.png"; 
import plus from "./assets/img/plus.png"; 
import black from "./assets/img/black.png";
import blackandblue from "./assets/img/blackandblue.png";
import manycolor from "./assets/img/manycolor.png";
import onlysalat from "./assets/img/onlysalat.png";
import orangeandsalat from "./assets/img/orangeandsalat.png";
import white from "./assets/img/white.png";
import whiteandblack from "./assets/img/whiteandblack.png";
import yellow from "./assets/img/yellow.png";
import blackandred from "./assets/img/blackandred.png";
import blackandwhitenike from "./assets/img/blackandwhitenike.png";
import search from "./assets/img/search.png";
import likeclick from "./assets/img/likeclick.png";
import shoponclick from "./assets/img/shoponclick.png";
import btnremove from "./assets/img/btn-remove.png";
function  App() {
return (
  <>
    <div className="divpapa">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
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
            <ul className="cartTotalBlock">
              <li className="endprice">
                <span>Итого:</span>
                <div className="dashedline"></div>
                <b>20 498</b>
              </li>
              <li className="endprice">
                <span>Налог 5%</span>
                <div className="dashedline"></div>
                <b>1074 руб.</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="header1">
        <div className="headerinfo">
          <img src={headerreSneakers} alt="" className="img1" />
          <div className="caption">
            <h3 className="h31">REACT SNEAKERS</h3>{" "}
            <span>Магазин лучшиx кроссовок</span>
          </div>
        </div>

        <ul className="manyicons">
          <li>
            <img src={purchases} alt="" className="captionicons" />
            <span>1205руб</span>
          </li>
          <li>
            <img src={like} alt="" className="captionicons" />
            <span>Закладки</span>
          </li>
          <li>
            <img src={profile} alt="" className="captionicons" />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content ">
        <div className="zagolovokwithserach">
          <h1 className="h12">Кроссовки</h1>
          <div className="searchinput">
            <img src={search} alt="" className="search" />
            <input type="text" placeholder="Поиск..." className="input1" />
          </div>
        </div>
        <div className=" content1">
          <div className="card">
            <div className="paddinglike">
              <img src={likeclick} alt="" className="likebtn onclicklike" />
            </div>
            <img
              src={green}
              alt=""
              width={133}
              height={112}
              className="greensneak zindex"
            />
            <span className="span1">
              Мужские Кроссовки Nike Blazer Mid Suede
            </span>
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
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>
            <img
              src={blackandblue}
              alt=""
              width={133}
              height={112}
              className="greensneak zindex"
            />
            <span className="span1">Мужские Кроссовки Nike LeBron XVIII</span>
            <div className="priceandadd">
              <div>
                <h4 className="h42">Цена:</h4>
                <span>12999 руб.</span>
              </div>
              <div className="plusbtn padding">
                <img src={shoponclick} alt="" className=" padding" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>{" "}
            <img
              src={blackandred}
              alt=""
              width={133}
              height={112}
              className="greensneak"
            />
            <span className="span1">
              Мужские Кроссовки Jordan Air Jordan 11
            </span>
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
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>{" "}
            <img
              src={manycolor}
              alt=""
              width={133}
              height={112}
              className="greensneak"
            />
            <span className="span1">
              Кроссовки Puma X Aka Boku Future Rider
            </span>
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
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>{" "}
            <img
              src={onlysalat}
              alt=""
              width={133}
              height={112}
              className="greensneak"
            />
            <span className="span1">
              Мужские Кроссовки Nike Kyrie Flytrap IV
            </span>
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
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>{" "}
            <img
              src={orangeandsalat}
              alt=""
              width={133}
              height={112}
              className="greensneak"
            />
            <span className="span1">
              Мужские Кроссовки Nike Lebron XVIII Low
            </span>
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
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>{" "}
            <img
              src={whiteandblack}
              alt=""
              width={133}
              height={112}
              className="greensneak"
            />
            <span className="span1">Мужские Кроссовки Nike Air Max 270</span>
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
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>{" "}
            <img
              src={yellow}
              alt=""
              width={133}
              height={112}
              className="greensneak"
            />
            <span className="span1">
              Мужские Кроссовки Under Armour Curry 8
            </span>
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
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>{" "}
            <img
              src={blackandwhitenike}
              alt=""
              width={133}
              height={112}
              className="greensneak"
            />
            <span className="span1">
              Мужские Кроссовки Nike Blazer Mid Suede
            </span>
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
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>{" "}
            <img
              src={green}
              alt=""
              width={133}
              height={112}
              className="greensneak"
            />
            <span className="span1">
              Мужские Кроссовки Nike Blazer Mid Suede
            </span>
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
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>{" "}
            <img
              src={manycolor}
              alt=""
              width={133}
              height={112}
              className="greensneak"
            />
            <span className="span1">
              Кроссовки Puma X Aka Boku Future Rider
            </span>
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
          <div className="card">
            <div className="paddinglike">
              <img src={like} alt="" className="likebtn" />
            </div>{" "}
            <img
              src={black}
              alt=""
              width={133}
              height={112}
              className="greensneak"
            />
            <span className="span1">Мужские Кроссовки Nike Kyrie 7</span>
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
      </div>
    </div>
  </>
);
}
export default App