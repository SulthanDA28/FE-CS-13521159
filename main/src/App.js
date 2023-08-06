
import './App.css';
import Navbar from './component/Navbar';
import Add from './component/Add';
import Hitung from './component/Hitung';
import AddJurusan from './component/AddJur';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/hitung" element={<Hitung />} />
        <Route path="/addjur" element={<AddJurusan />} />
      </Routes>
    </div>
  );
}

export default App;
