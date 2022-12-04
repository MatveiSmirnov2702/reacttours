import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("https://6383bb211ada9475c8069d29.mockapi.io/Items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6383bb211ada9475c8069d29.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://6383bb211ada9475c8069d29.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {  
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://6383bb211ada9475c8069d29.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id)  !== Number(obj.id)));
    } else {
      axios.post("https://6383bb211ada9475c8069d29.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6383bb211ada9475c8069d29.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://6383bb211ada9475c8069d29.mockapi.io/favorites/${obj.id}`
      );
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      const { data } = await axios.post(
        "https://6383bb211ada9475c8069d29.mockapi.io/favorites",
        obj
      );
      setFavorites((prev) => [...prev, data]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
