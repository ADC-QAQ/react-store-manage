import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider }git from "mobx-react";
// import stores from "./stores";
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  // <Provider store={stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  // </Provider>,
  document.getElementById('root')
);
reportWebVitals();