function Header() {
    return (
        <header className="d-flex justify-between align-centre p-40">
            <div className="d-flex align-centre">
                <img width={60} height={40} src="/img/LOGO2.png" alt="gg" />
                <div>
                    <h3 className="text-uppercase">OUTLOOK</h3>
                    <p>Consalting</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src="/img/cart.svg" alt="gg" />
                    <span>125000 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/User.svg" alt="gg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;