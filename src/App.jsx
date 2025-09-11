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
const sneakers = [
  {
    id: 1,
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12999 руб",
    imageUrl: blackandwhitenike,
    greentick: shoponclick,
  },
  {
    id: 2,
    name: "Мужские Кроссовки Jordan Air Jordan 11",
    price: "15699 руб",
    imageUrl: whiteandblack,
  },
  {
    id: 3,
    name: "Мужские Кроссовки Nike LeBron XVIII",
    price: "13499 руб",
    imageUrl: blackandblue,
  },
  {
    id: 4,
    name: "Мужские Кроссовки Jordan Air Jordan 11",
    price: "15699 руб",
    imageUrl: blackandred,
  },
  {
    id: 5,
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8999 руб",
    imageUrl: manycolor,
  },
  {
    id: 6,
    name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: "11299 руб",
    imageUrl: onlysalat,
  },
  {
    id: 7,
    name: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: "13999 руб",
    imageUrl: orangeandsalat,
  },
  {
    id: 8,
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "12699 руб",
    imageUrl: whiteandblack,
  },
  {
    id: 9,
    name: "Мужские Кроссовки Under Armour Curry 8",
    price: "11999 руб",
    imageUrl: yellow,
  },
  {
    id: 10,
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12999 руб",
    imageUrl: green,
  },
  {
    id: 11,
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8999 руб",
    imageUrl: manycolor,
  },
  {
    id: 12,
    name: "Мужские Кроссовки Nike Kyrie 7",
    price: "10999 руб",
    imageUrl: black,
  },
];
function App() {
  return (
    <>
      <div className="divpapa">
        <div style={{ display: "none" }} className="overlay">
          <Drawer />
        </div>
        <Header />
        <div className="content ">
          <div className="zagolovokwithserach">
            <h1 className="h12">Кроссовки</h1>
            <div className="searchinput">
              <img src={search} alt="" className="search" />
              <input type="text" placeholder="Поиск..." className="input1" />
            </div>
          </div>
          <div className=" content1">
            {sneakers.map((val) => (
              <Card
              key={val.id}
                onClick={() => console.log(val)}
                title={val.name}
                price={val.price}
                imageUrl={val.imageUrl}
                greentick={val.greentick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
