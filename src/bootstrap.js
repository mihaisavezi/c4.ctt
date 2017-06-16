/* eslint-disable */
// global css
import './app.scss';

// classes you want to use immediately
import { App } from './App/App';
import { homepage } from './homepage.template';
import { issues } from './issues';
import * as vex from 'vex-js';

// weird hack
window.$ = window.jQuery = require("jquery");
let analytics = require('./analytics.js')

function main() {

  analytics.init();

  const app = new App({
    dom: document.querySelector('.container')
  });
  app.render(homepage);

  let problemList = $('.js-problem-list');
  let submitBtn = $('.js-submit-items');

  vex.defaultOptions.className = 'vex-theme-os';

  problemList.on('click', 'li', clickHandler);
  submitBtn.on('click', submitHandler);
}

function clickHandler(e) {
  let $currentListItem = $(e.target);

  $currentListItem.toggleClass(function () {
    if ($(this).hasClass('white')) {
      $(this).removeClass('white');
      return 'black bg-white js-selected';
    } else {
      $(this).removeClass('bg-white js-selected');
      return 'white';
    }
  });

  let isSelected = $currentListItem.hasClass('js-selected') ? 'select' : 'deselect';
  ga('send', {
    hitType: 'event',
    eventCategory: 'Cause',
    eventAction: `click-${isSelected}`,
    eventLabel: `${currentListItem.text()}`
  });
}

function submitHandler(e) {
  e.preventDefault();

  let $selectedItems = $('.js-selected');
  if ($selectedItems.length < 1) return;

  let selectedItemsText = $selectedItems.toArray().map(item => item.innerHTML).reduce((prev, curr) => prev + curr + ', ', '').trim();
  let response = handleResponse($selectedItems);


  ga('send', {
    hitType: 'event',
    eventCategory: 'Cause',
    eventAction: 'submit',
    eventLabel: selectedItemsText
  });

  $.when().then(openModal.bind(null, response));
}

function handleResponse(items) {
  const multipleSelectionResponse = `
  500 de voluntari de la Code4Romania cred in continuare ca putem sa schimbam multe aici. Avem nevoie si de tine sa ducem toate proiectele mai departe- sa mai dărâmăm un zid, să mai facem o breșă, să mai mutăm un munte, să arătăm că se poate. Problemele care te frământă au un răspuns în proiectele Code4Romania. Fă-ne cinste cu o cafea si iți promitem ca noi stam treji și la noapte ca sa lucrăm la proiecte care să ne faca viata mai bună. 
  `;

  if (items.length > 1) {
    return multipleSelectionResponse;
  }
  else if (items.length === 1) {
    return issues[items.data('index')].responseText;
  }
};

function openModal(response) {
  vex.open({
    unsafeContent: `<article class="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
    <h1 class="f4">Mimi Whitehouse</h1>
    <hr class="mw3 bb bw1 b--black-10">
  </div>
  <p class="lh-copy measure center f6 black-70">
    ${response}
  </p>
<div class="mw5 center mt4 tc flex justify-around">
      <a class="f6 hover-black hover-bg-white bg-animate no-underline br2 ba ph3 pv2 mb2 dib black " href="#0">Join us</a>
<a class="f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black" href="#0">Buy him a coffee</a>
    </div>
</article>`,
    showCloseButton: false,
    escapeButtonCloses: true,
    overlayClosesOnClick: true,
    appendLocation: 'body',
    overlayClassName: '',
    contentClassName: 'mw7',
    closeClassName: ''
  });
}

document.addEventListener('DOMContentLoaded', main);