import logo from '../../../img/film.png';
import { APP } from '../../constants';
import './Header.scss';
import './Form.scss';

const Header = () => {
  const header = `
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <a href="index.html" class="header__logo">
            <img src="${logo}"/>
            MovieApp
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
          <form class="form" action="index.html">
            <input class="form__search" type="text">
            <button class="form__submit">
              <span class="icon-search"></span>
            </button>
          </form>

      </div>
    </header>
  `;
  APP.innerHTML += header;
};

export default Header;
