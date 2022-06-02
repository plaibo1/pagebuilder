import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuth, setUser } from '../../redux/user-reducer';

import {BiLogIn} from 'react-icons/bi'
import {BiUserPlus} from 'react-icons/bi'
import {FiPlus} from 'react-icons/fi'
import {ImExit} from 'react-icons/im'
import {FaRegUser} from 'react-icons/fa'
import {GoHome} from 'react-icons/go'
import rubik from '../../img/rubik.png'

const Navbar = () => {

  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.userData.isAuth);
  const isAdmin = useSelector(state => state.userData.user.role);
  const userFromStore = useSelector(state => state.userData.user)


  const logout = () => {
    dispatch(setUser({}))
    dispatch(setAuth(false))
    localStorage.setItem('token', '')
  }
  

  return (

    <>
      <div className='appNav'>

        <div className="appNav__side">
          <Link className='appNav__item' to={'/'}>About {<GoHome />}</Link>
        </div>

        <div className="appNav__side">

          {isAdmin === "ADMIN" ? <Link className='appNav__item enter' to={'/add-element'}>add element {<FiPlus />}</Link> : null}

          <Link className='appNav__item' to={'/app'}>app <img src={rubik} /> </Link>
          <div className="navStick"></div>

          {isAuth ?
            <>
              <Link className='appNav__item user' to={'/app'}> {<FaRegUser />} {userFromStore.email} </Link>
              <button className='appNav__item enter' onClick={logout}>Выйти {<ImExit />}</button>
            </>
            :
            <>
              <Link className='appNav__item enter' to={'/reg'}>Регистрация {<BiUserPlus />} </Link>
              <Link className='appNav__item enter' to={'/login'}>Войти {<BiLogIn />} </Link>
            </>
          }

        </div>

      </div>
    </>
  )
}

export default Navbar