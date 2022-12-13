import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Hooks/useHooks";

function Header(props) {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between align-centre p-40">
      <Link to="/">
        <div className="d-flex align-centre">
          <img width={60} height={40} src="/img/LOGO2.png" alt="gg" />
          <div>
            <h3 className="text-uppercase">OUTLOOK</h3>
            <p className="NameComp">Consalting</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="Contacts">
        <Link to="/Contacts">
          <p>Контакты</p>
          </Link>
        </li>
        <li className="Mission">
        <Link to="/Mission">
          <p>Цели и миссия</p>
          </Link>
        </li>
        <li className="AboutUs">
        <Link to="/AboutUs">
          <p>О нас</p>
          </Link>
        </li> 
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={25} height={18} src="/img/cart.png" alt="Корзина" />
          <span>{totalPrice}  руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src="/img/favorites.png"
              alt="Закладки"
            />
          </Link>
        </li>
        <li className="mr-30 cu-p">
          <Link  to="/Tours">
          <img width={18} height={18} src="/img/user.png" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
