import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App'; // Import the main App component
import { Provider } from 'react-redux'; // Import Provider component from react-redux to connect React with Redux
import my_store from './store/index.js'; // Import the Redux store

// Render the React application to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the App component with the Provider component to make the Redux store available to all components */}
    <Provider store={my_store}>
      <App />
    </Provider>
  </React.StrictMode>
);
