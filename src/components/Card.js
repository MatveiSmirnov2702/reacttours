function Card(props) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unlike" alt="unlike" />
            </div>
            <img width={150} height={121} src={props.imageURL} alt="brazilia" />
            <h5>{props.title}</h5>
            <h6>c 14.05.2022 до 20.05.2022</h6>
            <div className="d-flex justify-between align-centre ">
                <div className="d-flex flex-column">
                    <span> Стоимость:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/Plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;