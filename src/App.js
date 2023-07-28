import logo from './logo.svg';
import './App.css';
import Card from './compenenets/Card';

function App() {
  return (
    <div className="App container ">
      <header className="App-header rounded-3 position-sticky top-0">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Kitap Okuma Listesi</h1>
        <p className='me-4'>Crud App Project </p>
      </header>
      <Card />
    </div>
  );
}

export default App;
