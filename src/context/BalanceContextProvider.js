import React, { createContext, useState } from 'react';

export const BalanceContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const BalanceContextProvider = (props) => {
  const [balance, setBalance] = useState(0);

  return (
    <BalanceContext.Provider value={[balance, setBalance]}>
      {props.children}
    </BalanceContext.Provider>
  );
};
