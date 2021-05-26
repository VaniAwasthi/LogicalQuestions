import './App.css';
import CallApi from './Compnents/CallApi';
import ConsecutiveOne from './Compnents/ConsecutiveOne';
import EvenNumber from "./Compnents/EvenNumbers"
import RepeatedNumber from './Compnents/RepeatedNumber';
import SortObjectById from './Compnents/SortObjectById';
function App() {
  return (
    <div className="App">
      <h1>All Logic Tasks</h1>
      <div style={{display:'flex'}}>
      <EvenNumber/>
      <ConsecutiveOne/>
      <RepeatedNumber/>
      </div>
      <CallApi/>
      <SortObjectById/>
    </div>
  );
}

export default App;
