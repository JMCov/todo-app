import React, { useState } from 'react';

const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {

  const [items, setItems] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  const values = {items, showCompleted, sort, setItems, setShowCompleted, setSort};

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
 
};

export { SettingsProvider, SettingsContext };
