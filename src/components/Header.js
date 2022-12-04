import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-centre p-40">
      <Link to="/">
        <div className="d-flex align-centre">
          <img width={60} height={40} src="/img/LOGO2.png" alt="gg" />
          <div>
            <h3 className="text-uppercase">OUTLOOK</h3>
            <p>Consalting</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
          <span>125000 руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src="/img/heart.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/User.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
