import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {} from ''
// import { observable, action, computed, autorun } from 'mobx';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

// class Store {
//   @observable list = [];
//   @computed get total() {
//     return this.list.length;
//   }
//   @action change () {
//     this.list.push();
//   }
// };
// const mstore = new Store();

// autorun(() => {
//   console.log(mstore.total);
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();