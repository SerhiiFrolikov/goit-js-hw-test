import Pagination from 'tui-pagination';
import { UnsplashAPI } from './UnsplashAPI';
import 'tui-pagination/dist/tui-pagination.min.css';
import { createGalleryCard } from './createGalleryCard';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const api = new UnsplashAPI();
const list = document.querySelector('.js-gallery');

const searchFormEl = document.querySelector('.js-search-form');

const container = document.getElementById('tui-pagination-container');
const options = {
  // below default value of options
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

api
  .getPopularImages(page)
    .then(({ results, total }) => {
    pagination.reset(total);
    const markup = createGalleryCard(results);
    list.insertAdjacentHTML('beforeend', markup);
  })
  .catch(e => console.log(e));

pagination.on('afterMove', popular);

function popular(event) {
  const currentPage = event.page;
  api
    .getPopularImages(currentPage)
    .then(({ results, total }) => {
      list.innerHTML = '';
      const markup = createGalleryCard(results);
      list.insertAdjacentHTML('beforeend', markup);
    })
    .catch(e => console.log(e));
  console.log(currentPage);
}
function querySearch(event) {
  const currentPage = event.page;
  api
    .getImagesByQuery(currentPage)
    .then(({ results, total }) => {
      list.innerHTML = '';
      const markup = createGalleryCard(results);
      list.insertAdjacentHTML('beforeend', markup);
    })
    .catch(e => console.log(e));
}

function onSubmit(e) {
  e.preventDefault();

  const { query } = e.target.elements;
  const inputValue = query.value.trim();

  if (!inputValue) {
    Notify.failure('Enter something to search box!');
    return;
  }

  pagination.off('afterMove', popular);
  pagination.off('afterMove', querySearch);

  api.query = inputValue;
  api
    .getImagesByQuery(page)
      .then(({ results, total }) => {
    if (total === 0) {
        Notify.failure('NOT FAUND');
            return;
      }
      pagination.reset(total);
      list.innerHTML = '';
      const markup = createGalleryCard(results);
        list.insertAdjacentHTML('beforeend', markup);
        Notify.success(`Знайдено ${total} зображень`);
    })
    .catch(e => console.log(e));

  pagination.on('afterMove', querySearch);
}

searchFormEl.addEventListener('submit', onSubmit);
