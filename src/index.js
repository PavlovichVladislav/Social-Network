import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

import store from './Store/reduxStore';
import StoreContext from './Store/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>
    </React.StrictMode>
  );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);





