const openSelect = (e) => {
  if (e.target.closest('.search-form__select')) {
    const select = document.querySelector('.select');
    select.classList.toggle('select_hidden');
  }
};

const closeSelect = () => {
  const select = document.querySelector('.select');
  select.classList.add('select_hidden');
};

const chooseSelect = (e) => {
  if (e.target.closest('.select__item')) {
    const selectItems = document.querySelectorAll('.select__item');
    selectItems.forEach((item) => item.classList.remove('select__item_selected'));
    const selectItem = e.target.closest('.select__item');
    selectItem.classList.add('select__item_selected');
    const selectTitle = document.querySelector('.search-form__select-item');
    selectTitle.innerHTML = selectItem.dataset.select;
    closeSelect();
  }
};

const mouseleaveSelect = (e) => {
  if (!e.target.closest('.select_move')) {
    closeSelect();
  }
};

const addToWhatchlist = () => {
  console.log(2);
};

const eventFunc = [openSelect, addToWhatchlist, chooseSelect];

const addEvents = () => {
  eventFunc.forEach((func) => document.addEventListener('click', func));
  document.addEventListener('mousemove', mouseleaveSelect);
};

export default addEvents;
