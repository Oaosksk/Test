import './App.css';
import Module1 from './module1/Module1';
import Module2 from './module2/Module2';

function App() {
  return (
    <div className="App">
      <div className="App-header" style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minHeight: '100vh',
        justifyContent: 'center'
      }}>
        <div style={{ height: '50%' }}>
          <Module1 />
        </div>
        <div style={{ height: '50%' }}>
          <Module2 />
        </div>
      </div>
    </div>
  );
}

export default App;
