import './App.css';
import Gallery from 'react-grid-gallery';

const data = require("./data/albums_test.json");
const images = data.albums;

function App() {
  return (
    <div className="App">
      <Gallery images={images}/>
    </div>
  );
}

export default App;
