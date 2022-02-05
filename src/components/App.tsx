import { BalanceContextProvider } from '../context/BalanceContextProvider';
import Balance from './Balance';
import OpenCaseWidgedContainer from './OpenCaseWidgetContainer';

function App() {
  return (
    <div className="container mx-auto relative h-screen">
      <BalanceContextProvider>
        <Balance />
        <div className="h-screen flex items-center justify-center">
          <OpenCaseWidgedContainer />
        </div>
      </BalanceContextProvider>
    </div>
  );
}

export default App;
