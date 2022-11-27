import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  { 
    title: "Тур в бразилию",
    price: 125000, 
    imageURL: "/img/brazilia.jpg" 
  },
  { 
    title: "Тур в мексику", 
    price: 220000, 
    imageURL: "/img/brazilia.jpg" 
  },
];
function App() {
  const [cartOpened, setCartOpened] =  React.useState(false);
  return (
    <div className="wrapper clear">
      {cartOpened  ? <Drawer /> : null  }
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="mb-40 align-centre justify-between d-flex">
          <h1>Все ваши любимые туры</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageURL={obj.imageURL}  />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
