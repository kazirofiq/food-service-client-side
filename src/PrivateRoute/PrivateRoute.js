
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const  location = useLocation();

    if(loading){
        return  <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};
export default PrivateRoute;