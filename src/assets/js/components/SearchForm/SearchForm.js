import './SearchForm.scss';

const SearchForm = () => {
  const form = `
    <form class="search-form" action="index.html">
      <label class="search-form__select select_move">
        <span class="search-form__select-item">Movie</span>
        <span class="icon-triangle-down"></span>
      </label>

      <div class="select select_hidden">
        <div class="select__item select__item_selected select_move" data-select="Movie">
          <span class="icon-film1"></span>
          Movie
        </div>
        <div class="select__item select_move" data-select="Person">
          <span class="icon-users"></span>
          Person
        </div>
      </div>

      <input class="search-form__search" type="text">
      <button class="search-form__submit" type="submit">
        <span class="icon-search"></span>
      </button>
    </form>
  `;

  return form;
};

export default SearchForm;
