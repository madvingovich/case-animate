import React from 'react';
import { ICaseInfo } from './ICaseInfo';

interface OpenCaseProps {
  openCase: () => void;
  opening: boolean;
  lastCaseInfo: ICaseInfo | null;
}

function OpenCase({ openCase, opening, lastCaseInfo }: OpenCaseProps) {
  return (
    <div className="w-72 h-72 rounded-md border border-indigo-300 flex items-center justify-center shadow-xl">
      <button>OPEN</button>
    </div>
  );
}

export default OpenCase;
