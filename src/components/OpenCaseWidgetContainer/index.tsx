import axios from 'axios';
import React from 'react';
import { BalanceContext } from '../../context/BalanceContextProvider';
import { ICaseInfo } from './ICaseInfo';
import OpenCase from './OpenCase';

function OpenCaseWidgedContainer() {
  const { setBalance } = React.useContext(BalanceContext);

  const [opening, setOpening] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [lastCaseInfo, setLastCaseInfo] = React.useState<ICaseInfo | null>(
    null,
  );

  const openCase = async () => {
    setOpening(true);
    setLastCaseInfo(null);
    return axios
      .get('https://sample-rest-api.vercel.app/api/case')
      .then(({ data }) => {
        setLastCaseInfo(data);
        setBalance((b: number) => b + data.price);
      })
      .finally(() => {
        setTimeout(() => setOpening(false), 300); // to let animation finish
      })
      .catch(() => {
        setError(true);
      });
  };

  return error ? (
    <h1 className="text-lg text-red-500">Something went wrong.</h1>
  ) : (
    <OpenCase
      opening={opening}
      lastCaseInfo={lastCaseInfo}
      openCase={openCase}
    />
  );
}

export default OpenCaseWidgedContainer;
