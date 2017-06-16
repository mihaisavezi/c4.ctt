/* eslint-disable global-require */

import './vendor.scss';

// polyfills and vendors

if (!window._babelPolyfill) {
  require('babel-polyfill');
}
