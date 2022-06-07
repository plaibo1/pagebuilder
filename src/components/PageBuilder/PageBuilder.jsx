import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Elements from "../elements/Elements"
import Filed from "../Field/Filed"


const PageBuilder = () => {

    const isAuth = useSelector(state => state.userData.isAuth);

    return(
        <div className="PageBuilder">

            {!isAuth && <Navigate replace to="/login" />}

            <Elements/>
            <Filed/>
            
        </div>
    )
}

export default PageBuilder;