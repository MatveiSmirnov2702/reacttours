import Card from "../components/Card";

function Favorites( {items, onAddToFavorite} ) {
  return (
    <div className="content p-40">
      <div className="mb-40 align-centre justify-between d-flex">
        <h1>
         Мои закладки
        </h1>
        </div>
      <div className="d-flex flex-wrap">
      {items.map((item, index) => (
            <Card
              key={index} 
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))}
      </div>
      </div>
  );
}

export default Favorites;
