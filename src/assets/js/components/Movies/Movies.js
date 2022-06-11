import { API_URI_V2, APP, TOP_AWAIT } from '../../constants';
import getData from '../../getData';
import MovieCart from '../MovieCart/MovieCart';
import './Movies.scss';

const Movies = async () => {
  let wrapper = '<main class="movies container">';
  const { films } = await getData(API_URI_V2 + TOP_AWAIT);
  if (films) {
    await Promise.all(films.map(
      async ({ nameRu, posterUrlPreview }) => {
        wrapper += MovieCart(nameRu, posterUrlPreview);
      },
    ));
    console.log(films);
  }
  APP.innerHTML += `${wrapper}</main>`;
};

export default Movies;
