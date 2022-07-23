import './App.css';
import Counter from './component/Counter';
import RestCountry from './fetchComponent/RestCountry';

function App() {
  return (
    <div className="App">
      <h2>react-redux app</h2>
      <RestCountry></RestCountry>
    </div>
  );
}

export default App;
