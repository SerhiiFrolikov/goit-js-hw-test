import Pagination from 'tui-pagination';
import { UnsplashAPI } from "./UnsplashAPI";
import 'tui-pagination/dist/tui-pagination.min.css';
import { createGalleryCard } from './createGalleryCard';

const api = new UnsplashAPI();
const list = document.querySelector('.js-gallery');

const container = document.getElementById('tui-pagination-container');
const options = { // below default value of options
    totalItems: 0,
    itemsPerPage: 12,
    visiblePages: 5,
    page: 1,
     template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
};

const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

api.getPopularImages(page).then(({ results, total }) => {
    pagination.reset(total);
    const markup = createGalleryCard(results);
    list.insertAdjacentHTML('beforeend', markup);
}).catch(e => console.log(e));

pagination.on('afterMove', (event) => {
    const currentPage = event.page;
    api.getPopularImages(currentPage).then(({ results, total }) => {
        list.innerHTML = "";
        const markup = createGalleryCard(results);
        list.insertAdjacentHTML('beforeend', markup);
}).catch(e => console.log(e));
     console.log(currentPage);
});


