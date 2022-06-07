import { check, getMySites, login, registration, saveCurHTML } from "../http/userAPI";


const SET_USER = 'pageBuilder/userReducer/SET_USER';
const SET_AUTH = 'pageBuilder/userReducer/SET_AUTH';
const SET_ERROR = 'pageBuilder/userReducer/SET_ERROR';
const SET_MY_SITES = 'pageBuilder/userReducer/SET_MY_SITES';
const SET_SAVE_LOCAL_SUCCESS = 'pageBuilder/userReducer/SET_SAVE_LOCAL_SUCCESS';


let initialState = {
  user: {},
  isAuth: false,
  isError: false,
  mySites: [],
  saveLocalSuccess: false
}

const userDataReducer = (state = initialState, action) => {


  switch (action.type) {

    case SET_SAVE_LOCAL_SUCCESS:
      return {
        ...state,
        saveLocalSuccess: action.success
      }

    case SET_USER:
      return {
        ...state,
        user: action.user
      }

    case SET_AUTH:
      return {
        ...state,
        isAuth: action.authStatus
      }

    case SET_ERROR:
      return {
        ...state,
        isError: action.myError
      }

    case SET_MY_SITES:
      return {
        ...state,
        mySites: action.sites
      }

    default:
      return state;
  }

}

export const setUser = (user) => ({ type: SET_USER, user })
export const setAuth = (authStatus) => ({ type: SET_AUTH, authStatus })
export const setError = (myError) => ({ type: SET_ERROR, myError })

export const setMySites = (sites) => ({ type: SET_MY_SITES, sites })
export const setLocalSuccess = (success) => ({ type: SET_SAVE_LOCAL_SUCCESS, success })

export const registerUser = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await registration(email, password);
      dispatch(setUser(res))
      dispatch(setAuth(true))
      dispatch(setError(false))
    }
    catch (err) {
      alert(err.response.data.message)
      dispatch(setError(true))
    }
  }
}

export const loginUser = (email, password) => {
  return async (dispatch) => {

    login(email, password)
      .then(res => {
        dispatch(setUser(res))
        dispatch(setAuth(true))
        dispatch(setError(false))

        console.log('login from reducer', res)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })

  }
}

export const checkUser = () => {
  return async (dispatch) => {

    check()
      .then(res => {
        dispatch(setUser(res))
        dispatch(setAuth(true))
        dispatch(setError(false))

        // console.log('check() from reducer', res)
      })
      .catch((err) => {
        dispatch(setAuth(false))
        console.log(err.response.data.message)
      })

  }
}

export const saveCurHTMLtoServer = (userId, curHTML) => {
  return async (dispatch) => {

    saveCurHTML(userId, curHTML)
      .then(res => {
        console.log(res)
        if (res.siteInfo) dispatch(setLocalSuccess(true))
    })
      .catch((err) => {
        console.log(err.response.data.message)
      })

  }
}

export const getSaveSites = () => {
  return async dispatch => {

    check().then(data => {
      console.log('---data from getSaves -----', data)
      getMySites(data.id).then(data => {
        dispatch(setMySites(data))
      });
    })

  }
}

export default userDataReducer