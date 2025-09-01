import headerreSneakers from './assets/img/headersneakers.png'
import './App.css'
import purchases from './assets/img/purchases.png'
import like from "./assets/img/like.png";
import profile from "./assets/img/profile.png";
function  App() {
return (
  <>
    <div className="divpapa">
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
            <img src={purchases} alt="" />
            <span>1205руб</span>
          </li>
          <li>
            <img src={like} alt="" />
            <span>Закладки</span>
          </li>
          <li>
            <img src={profile} alt="" />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content ">
        <h1 className="h12">Кроссовки</h1>
        <div className=" content1">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  </>
);
}
export default App