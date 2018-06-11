import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'normalize.css';
import './global.css';
// import Lightbox from './components/Pages/Block1/Lightbox/Lightbox';

import App from './components/App';

import allReducers from './reducers';

import Page from './components/common/Page/Page';

const store = createStore(allReducers,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// var data = JSON.parse(require('./data.json'));
// console.log(data);

ReactDOM.render(
    <Router>
      <Provider store={store}>
          <div>
            <Route exact path='/' component={App} />
            <Route path='/:id' component={Page} />
          </div>
      </Provider>
    </Router>,
  document.getElementById('root')
);

