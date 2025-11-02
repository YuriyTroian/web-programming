import logoImg from '../../img/logo.svg'

import './header.css'

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="Logo" height={40} width={40}/>
                        <span>My Stones</span>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#!">Home</a></li>
                            <li><a href="#">Catalog</a></li>
                            <li><a href="#">Cart</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;