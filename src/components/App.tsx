import { BalanceContextProvider } from '../context/BalanceContextProvider';
import Balance from './Balance';
import OpenCaseWidgedContainer from './OpenCaseWidget';

function App() {
  return (
    <div className="container mx-auto relative h-screen flex items-center justify-center">
      <BalanceContextProvider>
        <Balance />
        <OpenCaseWidgedContainer />
      </BalanceContextProvider>
    </div>
  );
}

export default App;
