import { makeAutoObservable} from 'mobx';
import { IHomeStore } from './interface';


export class HomeStore implements  IHomeStore {
  constructor() {
    makeAutoObservable(this);
  };
  count = 0;

  increment = () => {
    this.count++;
  };
  decrement = () => {
    this.count--;
  };
  get doubleCount() {
    return this.count * 2;
  };
};

export const STORE_HOME = 'homeStore';