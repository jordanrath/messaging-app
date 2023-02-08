import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        navigate("/");
    }
    logout();

  return (
    <>
        <Logout/>
    </>
  )
};

export default Logout;