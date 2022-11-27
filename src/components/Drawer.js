function Drawer() {
    return (
        <div style={{display:'none'}} className="overlay">
        <div className="drawer">
        <h3 className="d-flex justify-between mb-20" >Корзина<img className="cu-p" src="/img/btn-remove.svg" alt="remove" />
        </h3>
        <div className="items">
          <div className="cartItem d-flex align-centre  mb-20">
            <img className="mr-20" width={70} height={50} src="/img/brazilia.jpg" alt="brazilia" />
            <div className="mr-20">
              <p className="mb-5">Тур в бразилию</p>
              <b>125 000 руб.</b>
            </div>
            <img className="removeBtn ml-50" src="/img/btn-remove.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-centre  mb-20">
            <img className="mr-20" width={70} height={50} src="/img/brazilia.jpg" alt="brazilia" />
            <div className="mr-20">
              <p className="mb-5">Тур в бразилию</p>
              <b>125 000 руб.</b>
            </div>
            <img className="removeBtn ml-50" src="/img/btn-remove.svg" alt="remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>125 000 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>6250 руб. </b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"></img></button>
        </div>
        </div>
      </div >

    );
}

export default Drawer;