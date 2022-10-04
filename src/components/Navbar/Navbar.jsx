import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { saveCurHTMLtoServer, setAuth, setLocalSuccess, setUser } from '../../redux/user-reducer';

import {BiLogIn} from 'react-icons/bi'
import {BiUserPlus} from 'react-icons/bi'
import {FiPlus} from 'react-icons/fi'
import {ImExit} from 'react-icons/im'
import {FaRegUser} from 'react-icons/fa'
import {GoHome} from 'react-icons/go'
import {GiSave} from 'react-icons/gi'
import {IoMdDoneAll} from 'react-icons/io'
import rubik from '../../img/rubik.png'
import { downloadHTML, sendHTML, updateSavedSite } from '../../http/userAPI';
import { setModalConfetti, updateCurrentHtml } from '../../redux/elements-reducer';


const Navbar = () => {

  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.userData.isAuth);
  const isAdmin = useSelector(state => state.userData.user.role);
  const userFromStore = useSelector(state => state.userData.user)
  const saveItemId = useSelector(state => state.elementsList.saveItemId)

  const curHTML = useSelector(state => state.elementsList.currentHtml)
  const saveLocalSuccess = useSelector(state => state.userData.saveLocalSuccess)

  const logout = () => {
    dispatch(setUser({}))
    dispatch(setAuth(false))
    dispatch(updateCurrentHtml([]))
    localStorage.setItem('token', '')
  }

  const fileReader = new FileReader();

  const saveHTML = () => {
    sendHTML(curHTML, 'Your website name')
      .then(data => {

        if (data !== '0 elements') {
          downloadHTML(data.fileName).then(data => {
            fileReader.readAsDataURL(new Blob([data]))
            dispatch(setModalConfetti(true))
          })
        }

      })
  }

  fileReader.addEventListener('loadend', () => {
    const blobString = fileReader.result
    const link = document.createElement('a');
    link.href = blobString;
    link.setAttribute('download', 'index.html');
    document.body.appendChild(link);

    link.click()
  })

  const saveLocal = () => {

    if (curHTML.length !== 0) {

      if (saveItemId !== 0) {
        updateSavedSite(saveItemId, curHTML).then(data => {
          if (data === 'siteWasSave') dispatch(setLocalSuccess(true))
        })
      }

      else {
        dispatch(saveCurHTMLtoServer(userFromStore.id, curHTML))
      }

      setTimeout(() => {
        dispatch(setLocalSuccess(false))
      }, 2000)
      
    }

  }

  return (
    <>
      <div className='appNav'>

        <div className="appNav__side">
          <Link className='appNav__item' to={'/'}>Pagebuilder main</Link>
          {isAuth ? <Link className='appNav__item' to={'/mySites'}>My sites {<GoHome />}</Link> : null}
        </div>

        <div className="appNav__side">

          {isAdmin === "ADMIN" ? <Link className='appNav__item enter' to={'/add-element'}>add element {<FiPlus />}</Link> : null}

          <Link className='appNav__item' to={'/app'}>app <img src={rubik} /> </Link>
          <div className="navStick"></div>

          {isAuth ?
            <>
              <Link className='appNav__item user' to={'/mySites'}> {<FaRegUser />} {userFromStore.email} </Link>
              <button className='appNav__item enter' onClick={logout}>Sign out{<ImExit />}</button>
              <button className='appNav__item save' onClick={saveHTML}>save HTML {<GiSave />}</button>

              <button className={saveLocalSuccess ? 'appNav__item success' : 'appNav__item'} onClick={saveLocal}>
                {saveLocalSuccess ? <>Saved  {<IoMdDoneAll />} </> : <>Save {<GiSave />} </> }
                
              </button>

            </>
            :
            <>
              <Link className='appNav__item enter' to={'/reg'}>Registration {<BiUserPlus />} </Link>
              <Link className='appNav__item enter' to={'/login'}>Sign in {<BiLogIn />} </Link>
            </>
          }

        </div>

      </div>
    </>
  )
}

export default Navbar