import logo from './logo.svg';
import './App.css';
import Gallery from 'react-grid-gallery';

const data = require("./data/albums_test.json");
const images = data.albums;

function App() {
  return (
    <div className="App">
      <Gallery images={images}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
