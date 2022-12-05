function Drawer({onClose, onRemove, items =[ ]  }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h3 className="d-flex justify-between mb-20">
          Корзина
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h3>

         {
            items.length > 0 ? (
              <div>
                 <div className="items"> 
              {items.map((obj) => (
              <div key={obj.id} className="cartItem d-flex align-centre  mb-20">
                <img
                  className="mr-20"
                  width={70}
                  height={50}
                  src={obj.imageURL}
                  alt="brazilia"
                />
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <h6>{obj.date}</h6>
                  <p>{obj.price} руб.</p>
                </div>
                <img
                  onClick={() => onRemove(obj.id) }
                  className="removeBtn ml-50"
                  src="/img/btn-remove.svg"
                  alt="Remove"
                />
              </div>
            ))}
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
          <button className="greenButton">
            Оформить заказ<img src="/img/arrow.svg" alt="arrow"></img>
          </button>
        </div>
              </div>
          ):(
          <div className="cartEmpty d-flex align-center justify-center flex-column flex"> 
         <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="empty-cart" />
         <h2>Корзина пуста</h2>
         <p className="opacity-6">Добавьте хотя бы один тур в корзину, чтобы сделать заказ</p>
         <button onClick={onClose} className="greenButton">
           <img  src="/img/arrow.svg" alt="arrow"/>
           Вернуться назад
         </button>
       </div> 
         )}   
        
      </div>
    </div>
  );
}

export default Drawer;
