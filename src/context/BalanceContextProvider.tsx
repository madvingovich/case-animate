import React, { createContext, useState } from 'react';

interface ProviderProps {
  children: object;
}

export const BalanceContext = createContext<{
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}>({} as any);

// Create a provider for components to consume and subscribe to changes
export const BalanceContextProvider = (props: ProviderProps) => {
  const [balance, setBalance] = useState(0);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {props.children}
    </BalanceContext.Provider>
  );
};
