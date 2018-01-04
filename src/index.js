
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// reducers
import rootReducer from './store/root-reducer'

// base imports
import './assets/styles/index.scss';
import App from './components/App';
import { IncomingMessage } from 'electron';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

