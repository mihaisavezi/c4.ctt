/* eslint-disable */
// global css
import './app.scss';

// classes you want to use immediately
import { App } from './App/App';
import { homepage } from './homepage';
import * as vex from 'vex-js';

// weird hack
window.$ = window.jQuery = require("jquery");
var analytics = require('./analytics.js')

function main() {

  $.when().then(analytics.init);

  const app = new App({
    dom: document.querySelector('.container')
  });
  app.render(homepage);


  var problemList = $('.js-problem-list');
  var submitBtn = $('.js-submit-items');

  vex.defaultOptions.className = 'vex-theme-os';

  problemList.on('click', function (e) {

    var $currentListItem = $(e.target);
    $currentListItem.toggleClass(function () {
      if ($(this).hasClass('white')) {
        $(this).removeClass('white');
        return 'black bg-white js-selected';
      } else {
        $(this).removeClass('bg-white js-selected');
        return 'white';
      }
    });
  });

  submitBtn.on('click', function (e) {
    e.preventDefault();
    var $selectedItems = $('.js-selected');
    var chosenItems = [];

    $selectedItems.map(function (index, item) {
      chosenItems.push($(item).text().trim());
    });


    ga('send', {
      hitType: 'event',
      eventCategory: 'Cause',
      eventAction: 'click',
      eventLabel: chosenItems[0]
    });

    $.when().then(function () {
      var items = chosenItems.map(function (item) {
        return '<span class="dib ph3 pv0 mb1 bg-black bg-animate no-underline white ba br-pill b--white-20 fw4">' + item + '</span>';
      }).join(' ');
      vex.open({
        unsafeContent: '<article class="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">\n  <div class="tc">\n    <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">\n    <h1 class="f4">Mimi Whitehouse</h1>\n    <hr class="mw3 bb bw1 b--black-10">\n  </div>\n  <p class="lh-copy measure center f6 black-70">\n    Is working on ' + items + ', things that keep you up at night\n    You could join him and the team working on this project or you can buy him a coffee to show some appreciation for the work he is doing\n  </p>\n<div class="mw5 center mt4 tc flex justify-around">\n      <a class="f6 hover-black hover-bg-white bg-animate no-underline br2 ba ph3 pv2 mb2 dib black " href="#0">Join us</a>\n<a class="f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black" href="#0">Buy him a coffee</a>\n    </div>\n</article>',
        showCloseButton: false,
        escapeButtonCloses: true,
        overlayClosesOnClick: true,
        appendLocation: 'body',
        overlayClassName: '',
        contentClassName: 'mw7',
        closeClassName: ''
      });
    });
  });

}

document.addEventListener('DOMContentLoaded', main);