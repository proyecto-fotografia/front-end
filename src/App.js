import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
//import Switch from "react-switch";
import { Crear } from './components/Crear';
import { Editar } from './components/Editar';
import { Navbar } from './components/Navbar';
import { Listar } from './components/Listar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
     <Route exact path="/" element={<Listar></Listar>}></Route> 
     <Route exact path="/crear" element={<Crear></Crear>}></Route> 
     <Route exact path="/editar" element={<Editar></Editar>}></Route> 
     </Routes>
    </Router>

  );
}

export default App;
