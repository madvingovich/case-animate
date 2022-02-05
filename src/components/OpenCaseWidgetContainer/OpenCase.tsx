import React from 'react';
import DropInfo from './DropInfo';
import { ICaseInfo } from './ICaseInfo';
import OpenButton from './OpenButton';

interface OpenCaseProps {
  openCase: () => void;
  opening: boolean;
  lastCaseInfo: ICaseInfo | null;
}

function OpenCase({ openCase, opening, lastCaseInfo }: OpenCaseProps) {
  return (
    <div className="w-72 rounded-md border border-indigo-300 shadow-xl">
      <DropInfo item={lastCaseInfo} opening={opening} />
      <OpenButton loading={opening} onClick={openCase} />
    </div>
  );
}

export default OpenCase;
