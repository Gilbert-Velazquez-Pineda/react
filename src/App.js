import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './componentes/navbar/NavBar'
import inicio from './componentes/paginas/Inicio'
import Prueba from './componentes/paginas/Prueba'
import Test from './componentes/paginas/Test'



function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
      </Router>
    </div>
  );
}

export default App;
