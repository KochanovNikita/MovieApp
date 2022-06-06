import logo from '../../../img/film.png';
import { APP } from '../../constants';
import './Header.scss';

const Header = () => {
  const header = `
    <header class="header">
      <h2 class="header__logo">
        <img src="${logo}"/>
        MovieApp
      </h2>
    </header>
  `;
  APP.innerHTML += header;
};

export default Header;
