import './App.css';
import Gallery from 'react-grid-gallery';

const data = require("./data/albums_test.json").albums;

function App() {
  return (
    <div className="App">
      <Gallery images={data}/>
    </div>
  );
}

export default App;
