import Header from './components/Header/Header';
import { API_URI_V2, TOP_250 } from './constants';
import getData from './getData';
import '../style/style.css';

const createMovieTemplate = async (movies) => {
  console.log(movies);
};

const getMovies = async () => {
  const { films } = await getData(API_URI_V2 + TOP_250);
  if (films) {
    await Promise.all(films.map(async ({ nameRu }) => createMovieTemplate(nameRu)));
  }
};

getMovies();
Header();
