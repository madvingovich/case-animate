import React from 'react';
import { BalanceContext } from '../context/BalanceContextProvider';

function Balance() {
  const [balance] = React.useContext<[number]>(BalanceContext);

  return balance ? (
    <h1 className="absolute right-0 text-bold">{balance} $</h1>
  ) : null;
}

export default Balance;
