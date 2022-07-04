
import './App.css';
import AddSupplier from './components/AddSupplier'
import Header from './components/Header';
import AllSups from './components/AllSupplier';
import Report from './components/Report';
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom"
import UpdateSuppliers from './components/UpdateSupplier';

function App() {
  return (

    <Router>
    
    
   
      <Routes>
        
      <Route path ="/add" exact  element ={<AddSupplier/>}/>
      
      <Route path ="/all" exact element ={<AllSups/>}/>
     
      <Route path ="/update/:id" exact  element ={<UpdateSuppliers/>}/>

      <Route path ="/print" exact  element ={<Report/>}/>
      
      </Routes>
    

      

     </Router>
  
  );
}

export default App;
