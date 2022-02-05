import { createContext, useState } from 'react';
import { ProviderProps } from './ProviderProps';

export const PriceContext = createContext([0, (n: number) => {}]);

// Create a provider for components to consume and subscribe to changes
export const PriceContextProvider = (props: ProviderProps) => {
  const [price, setPrice] = useState(0);

  return (
    <PriceContext.Provider value={[price, setPrice]}>
      {props.children}
    </PriceContext.Provider>
  );
};
