import './App.sass';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageBuilder from './components/PageBuilder/PageBuilder';
import HomePage from './components/HomePage/HomePage';
import AddElementPage from './components/AddElementPage/AddElementPage';
import Navbar from './components/Navbar/Navbar';
import RegFrom from './components/AuthForms/RegForm';
import LoginForm from './components/AuthForms/LoginForm';
import { useEffect } from 'react';
import { checkUser } from './redux/user-reducer';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(checkUser())  
  }, [])

  
  return (
    <BrowserRouter>
      <div className='App'>

        <Navbar/>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/app' element={<PageBuilder />} />
          <Route path='/add-element' element={<AddElementPage />} />

          <Route path='/reg' element={<RegFrom />} />

          <Route path='/login' element={<LoginForm />} />

          <Route path='*' element={<h1>not found</h1>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
