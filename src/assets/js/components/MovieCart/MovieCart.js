import './MovieCart.scss';

const MovieCart = (nameRu, posterUrlPreview) => {
  const movie = `
    <article class="movie-cart">
      <img src="${posterUrlPreview}" 
           alt="${nameRu}"
           class="movie-cart__img"/>
      <a href="#" class="movie-cart__link">
        <h3 class="movie-cart__title">${nameRu}</h3>
      </a>
      <h4 class="movie-cart__whatchlist">
        + Whatchlist
      </h4>
    </article>
  `;
  return movie;
};

export default MovieCart;
