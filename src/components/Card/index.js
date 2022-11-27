import styles from "./Card.module.scss";
import React from "react";
function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
      setIsAdded(!isAdded);
    };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/unlike.svg" alt="unlike" />
      </div>
      <img width={150} height={121} src={props.imageURL} alt="brazilia" />
      <h5>{props.title}</h5>
      <h6>c 14.05.2022 до 20.05.2022</h6>
      <div className="d-flex justify-between align-centre ">
        <div className="d-flex flex-column">
          <span> Стоимость:</span>
          <b>{props.price} руб.</b>
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
