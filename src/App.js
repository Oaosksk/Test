import './App.css';
import Module1 from './module1/Module1';
import Module3 from './module3/Module3';
import Module4 from './module4/Module4';

function App() {
  return (
    <div className="App">
      <div className="App-header" style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        minHeight: '100vh',
        justifyContent: 'center'
      }}>
        <Module1 />
       
        <Module3 />
        <Module4 />
      </div>
    </div>
  );
}

export default App;
