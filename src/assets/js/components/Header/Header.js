import logo from '../../../img/clapperboard.png';
import { APP } from '../../constants';
import SearchForm from '../SearchForm/SearchForm';
import './Header.scss';

const Header = () => {
  const header = `
    <header class="header">
          <a href="index.html" class="header__logo">
            <img src="${logo}"/>
          </a>
          <div class="header__menu">
            <div class="header__burger">
              <div class="header__element"></div>
              <div class="header__element"></div>
              <div class="header__element"></div>
            </div>
            <div class="header__title">
              Menu
            </div>
          </div>
          ${SearchForm()}
          <div class="header__whatch-list">
            <span class="icon-bookmark-outline-add"></span>
            Whatchlist
          </div>

          <div class="header__auth">
            Sign In
          </div>
    </header>
  `;
  APP.innerHTML += header;
};

export default Header;
