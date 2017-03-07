import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './components/landing';

require('tachyons');
require('font-awesome/css/font-awesome.css');
require('./custom-style.css');

// Render the whole application
ReactDOM.render(
  <Landing />,
  document.getElementById('rootElement'),
);
