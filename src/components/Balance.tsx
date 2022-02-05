import React from 'react';
import { BalanceContext } from '../context/BalanceContextProvider';

function Balance() {
  const { balance } = React.useContext(BalanceContext);

  return balance ? (
    <h3 className="absolute right-0 font-bold">
      Current Balance:{' '}
      <span className="text-red-700">{balance.toFixed(2)} $</span>
    </h3>
  ) : null;
}

export default Balance;
