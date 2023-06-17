import logo from '../../resources/icons/header-icon.svg';
import './appHeader.sass';

const AppHeader = () => {
    return (
        <header className="header">
            <nav className="header__nav nav">
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <img src={logo} alt="logo" className="nav-list__img" />
                        Weather anywhere in the world
                    </li>
                    <li className="nav-list__item">
                        Form
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;