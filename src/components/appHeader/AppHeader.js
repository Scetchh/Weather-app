
import AppSearch from '../appSearch/AppSearch';

import logo from '../../resources/icons/header-icon.svg';
import './appHeader.sass';

const AppHeader = () => {
    return (
        <header className="header">
            <nav className="header__nav nav">
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <img src={logo} alt="logo" className="nav-list__img" />
                        <p className="nav-list__text">
                            Погода в любой точке планеты
                        </p>
                    </li>
                    <li className="nav-list__item">
                        <AppSearch/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;