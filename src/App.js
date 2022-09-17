import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './componentes/navbar/NavBar'
import Inicio from './componentes/paginas/Inicio'
import Test from './componentes/paginas/Test'
import SwapiContainer from './componentes/swapi/SwapiContainer';
import ItemListContainer from './componentes/navbar/ItemListContainer'
import { useEffect, useState } from 'react';
import InputNoVowels from './componentes/InputNoVowels';

function App() {

  const [counter, setCounter] = useState (0)
  const [products,setProducts]= useState([])

  useEffect (() => {
    console.log('promesa en mounting');

    const getProducts = new Promise( (resolve,reject) => {
      const rand = Math.random()
      console.log(rand);

      if(rand > 0) {
        resolve(['mouse', 'teclado','cpu'])
      }else {
        reject('promesa rechazada')
      }
      
    })

  getProducts
   .then((data) =>{
    console.log(data);
    setProducts (data)
  })

   .catch(err => {console.log(err);})
   .finally (() => {console.log('finaly siempre sucede');})

  } , [])

  const handleClick = () => {
    console.log('hiciste click');
    setCounter(counter + 1) 
  }

  //DOM
  return (
    <div className="App">
      <Router>
          <NavBar/>

          <InputNoVowels/>

          <div className='my-2'>
          <strong>Contador: {counter}</strong>
          </div>

          <button onClick={handleClick} className='btn btn-primary my-4'>Click</button>

          {products.map(p => <div className='p-3 mb-2 bg-dark text-white'>{p}</div>)}

          <ItemListContainer/>
          <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route  path="/SwapiContainer" element={<SwapiContainer/>}/>
            <Route  path='/Test' element={<Test/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
