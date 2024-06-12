import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>   
        <Route path='/ViewAll' element={<ViewAll/>}/> 
         </Routes></BrowserRouter>
    </div>
  );
}

export default App;
