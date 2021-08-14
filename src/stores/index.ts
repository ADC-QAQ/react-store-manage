import React from 'react';
import { STORE_HOME, HomeStore } from './home';


function createStores() {
    return {
      [STORE_HOME]: new HomeStore(),
    };
}

const stores = createStores();

export const storesContext = React.createContext(stores);

const useStores = () => React.useContext(storesContext);

function useHomeStore() {
    const { homeStore } = useStores();
    return homeStore;
}

export {
    stores,
    useHomeStore,
    STORE_HOME,
    HomeStore,
};