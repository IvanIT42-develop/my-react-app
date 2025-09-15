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
import box from "./assets/img/box.png";
import left from "./assets/img/left.png";
import { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
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
    const [cartItems, setCartItems] = useState([]);
        const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([
  ]);

  const [cardOpened, setcardOpened] = useState(false);
  const [count, setCount] = useState(0);
useEffect(()=>{
   axios
     .get("https://68c4305081ff90c8e61b84db.mockapi.io/items")
     .then((res) => {
       setItems(res.data);
     })
     axios.get("https://68c4305081ff90c8e61b84db.mockapi.io/card")
     .then((res) => {
       setCartItems(res.data);
     })
    

},[])
const onAddToCard=(obj)=>{
axios.post("https://68c4305081ff90c8e61b84db.mockapi.io/card",obj)
setCartItems([...cartItems,obj]);

}
const onChangeSerachInput =(event)=>{
  setSearchValue(event.target.value)
  
}
const filtereditems =
  items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase()))
const onRemoveItem=(id)=>{
  
   setCartItems((prev)=> prev.filter(item => item.id !== id));
 console.log(id)
}
  return (
    <>
      <div className="divpapa">
        {cardOpened ? (
          <Drawer
          leftBtn={left}
            boxBtn={box}
            onRemoweDrawerItem={onRemoveItem}
            imageadd={imageMap}
            items={cartItems}
            onCloseCard={() => setcardOpened(false)}
            // Pass the function
          />
        ) : null}
        <Header onClickCard={() => setcardOpened(true)} />
        <div className="content ">
          <div className="zagolovokwithserach">
            <h1 className="h12">
              {searchValue
                ? `Поиск по запросу:"${searchValue}"`
                : "Все кроссовки"}
            </h1>
            <div className="searchinput">
              <img src={search} alt="" className="search" />
              {searchValue ? (
                <img
                  src={btnremove}
                  alt=""
                  style={{ position: "absolute", right: 45, bottom: 506 }}
                  onClick={() => {
                    setSearchValue("");
                  }}
                />
              ) : null}
              <input
                type="text"
                placeholder="Поиск..."
                className="input1"
                onChange={onChangeSerachInput}
                value={searchValue}
              />
            </div>
          </div>
          <div className=" content1">
            {filtereditems.map((item) => (
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
