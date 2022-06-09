import './SearchForm.scss';

const SearchForm = () => {
  const form = `
    <form class="search-form" action="index.html">
      <input type="button" value="All" class="search-form__select">
      <input class="search-form__search" type="text">
      <button class="search-form__submit" type="submit">
        <span class="icon-search"></span>
      </button>
    </form>
  `;

  return form;
};

export default SearchForm;
