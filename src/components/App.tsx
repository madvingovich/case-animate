import { PriceContextProvider } from '../context/PriceContextProvider';
import OpenCaseWidgedContainer from './OpenCaseWidget';

function App() {
  return (
    <PriceContextProvider>
      <OpenCaseWidgedContainer />
    </PriceContextProvider>
  );
}

export default App;
