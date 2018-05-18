import React from 'react';
import { render } from 'react-dom';

// Instruments
import './assets/theme/reset.css';
import './assets/theme/general.scss';


import App from './containers/App/index.jsx';

render(<App />, document.querySelector('#root') );