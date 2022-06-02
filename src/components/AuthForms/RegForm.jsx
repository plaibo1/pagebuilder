import { useDispatch } from "react-redux"
import { registerUser } from "../../redux/user-reducer"
import Form from "./Form"


const RegForm = () => {

   
    const dispatch = useDispatch()

    const regSubmit = async (data) => {
        dispatch(registerUser(data.email, data.password))
    }

    return (
        <>
            <Form title={'Регистрация'} btnTitle={'Зарегистрироваться'} foo={regSubmit} />
        </>
    )
}

export default RegForm