//import logo from './logo.svg';
import './App.css';
import Saludo from './componentes/Saludo';

function App(props) {

  const mensaje = 'mensaje desde js'

  const estilos = {
    backgroundColor: '#888',
    padding: '20px'
  }

  return (
    <div className='container'>
      <Saludo name='Gilberto' lastname='Velazquez' />
      <h1>Prueba de App</h1>
      <h3 style={ estilos }>{ mensaje }</h3>
      
    </div>
  );
}

export default App;
