import './App.css';
import {Routes,Route} from 'react-router-dom';
import BelowNavbar from './components/jsfolder/BelowNavbar';
import Navbar from './components/jsfolder/Navbar';
import Contact from './components/jsfolder/contact';
import Reg from './components/jsfolder/reg'
import Login from './components/jsfolder/Login';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={
            <>
              <BelowNavbar />
              <Contact />
            </>
          }/>
    <Route path='/' element={<BelowNavbar/>}/>
    <Route path='/' element={<Contact/>}/>
      <Route path='/register' element={<Reg/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
