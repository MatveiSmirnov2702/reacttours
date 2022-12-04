import styles from "./Card.module.scss";
import React from "react";
function Card({ id, imageURL, title, data, price, onFavorite, onPlus, favorited, added = false }) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, imageURL, title, data, price });
    setIsAdded(!isAdded);
  };
  
  const onClickFavorite = () => {
    onFavorite({ id, imageURL, title, data, price });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={ isFavorite ? "/img/like.svg" : "/img/unlike.svg"} alt="unlike" />
      </div>
      <img width={150} height={121} src={imageURL} alt="brazilia" />
      <h5>{title}</h5>
      <h6>{data}</h6>
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
    </div>
  );
}

export default Card;
