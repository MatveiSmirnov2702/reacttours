import Card from "../components/Card";

function Home({
  cartItems,
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart
}) {
  return (
    <div className="content p-40">
      <div className="mb-40 align-centre justify-between d-flex">
        <h1>
          {" "}
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все туры"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear "
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              added={cartItems.some(obj => Number(obj.id) === item.id)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
