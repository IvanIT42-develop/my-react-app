import headerreSneakers from "./assets/img/headersneakers.png";
import "./App.css";
import purchases from "./assets/img/purchases.png";
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
import Header from "./components/Header";
import shoponclick from "./assets/img/shoponclick.png";
import btnremove from "./assets/img/btn-remove.png";
import arrow from "./assets/img/arrow.png";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import { useContext } from "react";
const imageMap = {
  blackandwhitenike: blackandwhitenike,
  whiteandblack: whiteandblack,
  blackandblue: blackandblue,
  blackandred: blackandred,
  manycolor: manycolor,
  onlysalat: onlysalat,
  orangeandsalat: orangeandsalat,
  yellow: yellow,
  green: green,
  black: black,
  shoponclick: shoponclick,
};


function App() {
    const [cartItems, setCartItems] = useState([
     
    ]);
  const [items, setItems] = useState([
  ]);
  const [cardOpened, setcardOpened] = useState(false);
  const [count, setCount] = useState(0);
useEffect(()=>{
 fetch("https://68c4305081ff90c8e61b84db.mockapi.io/items")
   .then((res) => {
     return res.json();
   })
   .then((json) => {
     setItems(json);
     
   });
},[])
const onAddToCard=(obj)=>{
setCartItems([...cartItems,obj]);
}

  return (
    <>
      <div className="divpapa">
        {cardOpened ? (
          <Drawer
            imageadd={imageMap}
            items={cartItems}
            onCloseCard={() => setcardOpened(false)}
          />
        ) : null}
        <Header onClickCard={() => setcardOpened(true)} />
        <div className="content ">
          <div className="zagolovokwithserach">
            <h1 className="h12">Кроссовки</h1>
            <div className="searchinput">
              <img src={search} alt="" className="search" />
              <input type="text" placeholder="Поиск..." className="input1" />
            </div>
          </div>
          <div className=" content1">
            {items.map((item) => (
              <Card
                key={item.id}
                onClick={() => console.log(item)}
                title={item.name}
                price={item.price}
                imageUrl={imageMap[item.imageUrl]}
                greentick={item.greentick}
                plusbtn={plus}
                onPlus={(obj) => {
                  return onAddToCard(obj);
                }}
                shoponclick={shoponclick}
                onFavorite={() => {
                  console.log("Добавили в закладки");
                }}
                imageadd={imageMap}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
