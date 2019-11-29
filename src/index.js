import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index'
import EventsNew from './components/events_new'
import EventsShow from './components/events_show'
import * as serviceWorker from './serviceWorker';

const enhancer = process.env.NODE_ENV === 'development' ? 
   composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)

// thunkは、Middlewareであるため、applyMiddlewareで適用する必要がある
const store = createStore(reducer, enhancer)

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* exactは完全マッチ */}
        <Route path="/events/new" component={EventsNew} />
        {/* :id -> idは変数であるため:をつける */}
        <Route path="/events/:id" component={EventsShow} />
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch> 
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
