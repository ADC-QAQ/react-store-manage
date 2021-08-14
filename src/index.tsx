import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { stores } from '@/stores';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configure} from 'mobx'; // mobx开启严格模式

configure({enforceActions: 'always'});// 开启严格模式

ReactDOM.render(
    <React.StrictMode>
      <Provider {...stores}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();