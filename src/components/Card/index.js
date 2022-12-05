import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import React from "react";
function Card({
  id,
  title,
  imageURL,
  date,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, imageURL, title, date, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageURL, title, date, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
        ) : (
          <>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/like.svg" : "/img/unlike.svg"}
          alt="unlike"
        />
      </div>
      <img width={150} height={121} src={imageURL} alt="brazilia" />
      <h5>{title}</h5>
      <h6>{date}</h6>
      <div className="d-flex justify-between align-centre ">
        <div className="d-flex flex-column">
          <span> Стоимость:</span>
          <b>{price} руб.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-check.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
      </>
      )}
    </div>
  );
}

export default Card;
