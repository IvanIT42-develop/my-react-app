import headerreSneakers from "./assets/img/headersneakers.png";
import "./App.css"
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
import Bookmarks from "./components/bookmarks/bookmarks";
import {
  initBookmarks,
  getBookmarks,
  addToBookmarks,
  removeFromBookmarks,
  isBookmarked,
  getBookmarksCount
} from "./components/localstorage/localStorage"
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
  const[changeContentIfBookmarks,setChangeContentIfBookmarks]=useState(false)
    const [saveBookMarks, setSaveBookMarks] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [items, setItems] = useState([]);
    const [favorite,setFavorite]=useState(false)
    const [favoriteSneakers,setfavoriteSneakers]=useState([])
    const [cardOpened, setcardOpened] = useState(false);
    const [bookmarksOpened,setSaveBookMarksOpened] =useState(false)
    const loadBookmarks = () => {
      const bookmarks = getBookmarks();
      setSaveBookMarks(bookmarks || []); // гарантируем что будет массив
    };
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
   loadBookmarks()
initBookmarks()
},[])
const onAddToCard = async (obj) => {
  try {
    // 1. Отправляем запрос и ЖДЕМ ответа
    const { data } = await axios.post(
      `https://68c4305081ff90c8e61b84db.mockapi.io/card`,
      obj
    );

    // 2. Добавляем в состояние объект, который вернул сервер (с правильным id)
    setCartItems((prev) => [...prev, data]);
  } catch (error) {
    console.error("Ошибка при добавлении в корзину:", error);
    alert("Не удалось добавить товар в корзину");
  }
};
const onAddToBookmarks = (obj) => {

  try {
    // 1. "Добавляем" в закладки (синхронная операция)
    const success = addToBookmarks(obj);

    // 2. Если успешно, обновляем состояние
    if (success) {
      // Получаем актуальный список закладок
      const updatedBookmarks = getBookmarks();
      setSaveBookMarks(updatedBookmarks);
      console.log("Товар добавлен в закладки!");
    } else {
      console.log("Товар уже в закладках");
    }
  } catch (error) {
    console.error("Ошибка при добавлении в закладки:", error);
    alert("Не удалось добавить товар в закладки");
  }
};

const onChangeSerachInput =(event)=>{
  setSearchValue(event.target.value)
  
}
const filtereditems = items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase()))
const onRemoveItem=(id)=>{
 axios.delete(`https://68c4305081ff90c8e61b84db.mockapi.io/card/${id}`);
   setCartItems((prev)=> prev.filter(item => item.id !== id));

}
  const onRemoveBookmark = (id) => {
    removeFromBookmarks(id); // удаляем из localStorage
    loadBookmarks(); // перезагружаем и обновляем состояние
  };
  return (
    <>
      <div className="divpapa">
        {bookmarksOpened ? (
          <Bookmarks
            bookmarks={saveBookMarks}
            onRemoveBookmark={onRemoveBookmark}
            imageMap={imageMap}
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
              return onAddToBookmarks(item);
            }}
            imageadd={imageMap}
          />
        ) : null}
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
        <Header
          onClickCard={() => setcardOpened(true)}
          onClickLike={() => setSaveBookMarksOpened(true)}
        />
        <div className="content ">
          <div className="zagolovokwithserach">
            <h1 className="h12">
              {changeContentIfBookmarks
                ? "Мои закладки"
                : searchValue
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
                  return onAddToBookmarks(item);
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
