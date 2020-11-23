import { createContext, useContext } from 'react';

const AppContext = createContext({});

export const getAppContext = () => useContext(AppContext);

export default AppContext;
