import './MovieCart.scss';

const MovieCart = (nameRu, posterUrlPreview) => {
  const movie = `
    <article>
      <img src="${posterUrlPreview}" alt="${nameRu}"/>
      <h2>${nameRu}</h2>
    </article>
  `;
  return movie;
};

export default MovieCart;
