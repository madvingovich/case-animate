import axios from 'axios';
import React from 'react';
import { ICaseInfo } from './ICaseInfo';
import OpenCase from './OpenCase';

function OpenCaseWidgedContainer() {
  const [opening, setOpening] = React.useState(false);
  const [lastCaseInfo, setLastCaseInfo] = React.useState<ICaseInfo | null>(
    null,
  );

  const openCase = async () => {
    setOpening(true);
    return axios
      .get('https://sample-rest-api.vercel.app/api/case')
      .then(({ data }) => {
        setLastCaseInfo(data);
      })
      .finally(() => setOpening(false))
      .catch((e) => {
        console.log('-->', e);
      });
  };

  return (
    <OpenCase
      opening={opening}
      lastCaseInfo={lastCaseInfo}
      openCase={openCase}
    />
  );
}

export default OpenCaseWidgedContainer;
