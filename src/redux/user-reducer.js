import { check, login, registration } from "../http/userAPI";


const SET_USER = 'pageBuilder/userReducer/SET_USER';
const SET_AUTH = 'pageBuilder/userReducer/SET_AUTH';
const SET_ERROR = 'pageBuilder/userReducer/SET_ERROR';


let initialState = {
  user: {},
  isAuth: false,
  isError: false
}

const userDataReducer = (state = initialState, action) => {


    switch(action.type){

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

        default:
            return state;
    }

}

export const setUser = (user) => ({type: SET_USER, user})
export const setAuth = (authStatus) => ({type: SET_AUTH, authStatus})
export const setError = (myError) => ({type: SET_ERROR, myError})

export const registerUser = (email, password) => {
  return async (dispatch) => {
      try {
        const res = await registration(email, password);
        dispatch(setUser(res))
        dispatch(setAuth(true))
        dispatch(setError(false))
      }
      catch(err) {
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

      console.log('check() from reducer', res)
    })
    .catch((err) => {
      dispatch(setAuth(false))
      console.log(err.response.data.message)
    })

  }
}



export default userDataReducer