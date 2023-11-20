import './App.css';
import Create from './components/Create';
import Navbarr from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <Routes>         

            <Route exact path='/' element={<Create />} />
            <Route exact path='/read' element={<Read />} />
            <Route exact  path='/edit/:id' element={<Update/>} />
        
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
