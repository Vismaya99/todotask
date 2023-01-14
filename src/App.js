import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Viewall from './Components/Viewall';
import Addtodo from './Components/Addtodo';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/viewall' exact element={<Viewall/>}/>
    <Route path='/' exact element={<Addtodo/>}/>
    </Routes>
    
    </BrowserRouter>
  
  );
}

export default App;
