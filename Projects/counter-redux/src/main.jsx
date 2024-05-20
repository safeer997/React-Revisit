import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import my_store from './store/index.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={my_store}>
      <App />
    </Provider>
  </React.StrictMode>
);
