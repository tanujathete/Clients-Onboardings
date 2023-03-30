
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import AppNavbar from './Header/AppNavbar';
// import AppNavbar from './Header/AppNavbar';
import Home from './Home';
import ClientList from './components/Clients/ClientList';
import ClientEdit from './components/Clients/ClientEdit';
import AddClient from './components/Clients/AddClient';
import ViewSlae from './components/Slae/ViewSlae';
import AddSale from './components/Slae/AddSlae';
import SlaeEdit from './components/Slae/SlaeEdit';
import AddSlae from './components/Slae/AddSlae';

function App() {
  return (
 <>
  <Router>
     
       <div className='container'>
      <Routes>
     
      
      <Route exact path="/" element={<Home/>}/>
      <Route path='/clients' exact={true} element={<ClientList/>}/>
      <Route path='/clients/:id' component={ClientEdit}/>
      <Route path='/addclient' element={<AddClient/>}/>
      <Route  path="/clientedit" element={<ClientEdit/>}/>
      <Route  path="/viewslae" element={<ViewSlae/>}/>
      <Route  path="/add" element={<AddSlae/>}/>
      <Route  path="/slae" element={<SlaeEdit/>}/>


      </Routes>
      </div>
      
    </Router>

 </>
   
  );
}

export default App;