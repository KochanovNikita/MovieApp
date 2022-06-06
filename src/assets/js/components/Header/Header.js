import logo from '../../../img/film.png';
import { APP } from '../../constants';
import './Header.scss';

const Header = () => {
  const header = `
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <h2 class="header__logo">
            <img src="${logo}"/>
            MovieApp
          </h2>
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item">Главная</li>
              <li class="nav__item">Топ 250</li>
              <li class="nav__item">Топ 100</li>
              <li class="nav__item">Сейчас ждут</li>
            </ul>
        </div>
      </div>
    </header>
  `;
  APP.innerHTML += header;
};

export default Header;
