import './App.css';

import Header from './components/Header';
import Form   from './components/Form';
import Chart  from './components/Chart';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <Chart />
      </main>
    </div>
  );
}

export default App;
