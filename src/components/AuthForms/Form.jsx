import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { registerUser } from "../../redux/user-reducer"


const Form = ({title, btnTitle, foo}) => {

    const {
        register,
        setValue,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur" })

    const isAuth = useSelector(state => state.userData.isAuth)

    return (
        <div className="authForm-wrapper">

        {isAuth && <Navigate replace to='/app' />}

            <form className='authForm' onSubmit={handleSubmit(foo)}>

                <h1 className="authForm__heading">{title}</h1>

                <label>
                    <div>email: </div>
                    <input
                        {...register('email',
                            {
                                required: "*Поле обязательно к заполнению",
                            })
                        }
                    />
                </label>

                <label>
                    <div>password: </div>
                    <input
                        type='password'
                        {...register('password',
                            {
                                required: "*Поле обязательно к заполнению"
                            })
                        }
                    />
                </label>
                
                <div className="authForm__btn-wrapper">
                    <button className='authForm__btn' type='submit' disabled={!isValid}>{btnTitle}</button>
                </div>

            </form>

        </div>
    )
}

export default Form