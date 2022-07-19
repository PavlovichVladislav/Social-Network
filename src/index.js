import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

import store from './Store/reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App 
        appState={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);





