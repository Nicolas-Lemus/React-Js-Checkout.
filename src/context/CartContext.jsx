import React, { useState, createContext } from 'react';

export const CardContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState({ qtyItems: 0, Tecnologia: [] });

  return (
    <CardContext.Provider value={{count, setCount}}>
      {children}
    </CardContext.Provider>
  );
};
