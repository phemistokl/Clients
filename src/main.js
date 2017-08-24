import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import ClientsApp from './components/ClientsApp.jsx';

import store from './store';

ReactDOM.render(
	<Provider store={store}>
    	<ClientsApp />
    </Provider>,
    document.getElementById('root')
);
