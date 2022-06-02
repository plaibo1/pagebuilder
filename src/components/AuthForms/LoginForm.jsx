import { useDispatch } from "react-redux"
import { loginUser } from "../../redux/user-reducer"
import Form from "./Form"


const LoginForm = () => {

   
    const dispatch = useDispatch()

    const logSubmit = async (data) => {
        dispatch(loginUser(data.email, data.password))
    }

    return (
        <>
            <Form title={'Войти в аккаунт'} btnTitle={'Войти'} foo={logSubmit} />
        </>
    )
}

export default LoginForm