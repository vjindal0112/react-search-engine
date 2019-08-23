import React from 'react';
import ReactDOM from 'react-dom';
import products from './products.js';
import Search from './components/Search';

ReactDOM.render(<Search products={ products }/>, document.getElementById('app'));
