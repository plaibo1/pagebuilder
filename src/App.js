import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageBuilder from './components/PageBuilder/PageBuilder';
import HomePage from './components/HomePage/HomePage';
import AddElementPage from './components/AddElementPage/AddElementPage';
import Navbar from './components/Navbar/Navbar';
import RegFrom from './components/AuthForms/RegForm';
import LoginForm from './components/AuthForms/LoginForm';
import { useEffect, useState } from 'react';
import { checkUser } from './redux/user-reducer';
import { useDispatch, useSelector } from 'react-redux';

import Confetti from "react-confetti";
import { setModalConfetti } from './redux/elements-reducer';
import MySites from './components/MySites/MySites';
import useMediaQuery from './hooks/useMatchMedia';

function App() {
  const dispatch = useDispatch()
  const modalConfettiStatus = useSelector(state => state.elementsList.showConfetti)
  const isBLock = useMediaQuery("(max-width: 1212px)")

  useEffect(()=> {
    dispatch(checkUser())
  }, [])

  const endConfetti = () => {
    dispatch(setModalConfetti(false))
  }

  if (isBLock) {
    return (
      <div className="blockFront">
        Then more screen then more experience 🔥
      </div>
    )
  }
  
  return (
    <BrowserRouter>
      <div className='App'>

        <Navbar/>


        {modalConfettiStatus && 
          <div className='modalConfetti'>
          <Confetti
              recycle={modalConfettiStatus}
              numberOfPieces={250}
              width={window.clientWidth}
              height={window.clientHeight}
            />
            <div className='modalConfetti__content'>
              Ваш сайт уже скачивается 🎉
              <span>Не забудьте рассказать о нас</span>
              <button onClick={endConfetti}>ok</button>
            </div>
          </div>
        }        


        <Routes>

          <Route path='/' element={<HomePage />} />
            <Route path='/mySites' element={<MySites />} />
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
