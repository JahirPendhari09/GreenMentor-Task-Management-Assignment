
import { Navigate} from "react-router-dom"

const PrivateRoute =({children})=>{

    const isAuth=localStorage.getItem("isAuth")||true

    if (!isAuth)  return <Navigate to="/login"/>

    return <>{children}</>;
}

export {PrivateRoute}