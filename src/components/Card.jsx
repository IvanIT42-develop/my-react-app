import React from 'react'

function Card() {
  return (
    <div>
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
    </div>
  )
}

export default Card
