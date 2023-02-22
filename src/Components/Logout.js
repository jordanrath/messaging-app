import { signOut } from 'firebase/auth';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import authStatuses from '../Defines/authStatuses';
import { auth } from '../Firebase';

const Logout = ({ className, style, id, children }) => {
  const { setAuthStatus } = useContext(AuthContext);
  const navigate = useNavigate();

    const onLogoutClick = useCallback(() => {
      setAuthStatus(authStatuses.signingOut);
      signOut(auth);
      navigate("/");
    }, [navigate, setAuthStatus])
    
    const buttonProps = {className, style, id, onClick: onLogoutClick};
    const content = (!children ? undefined : children);

  return (
    <>
      <button
        {...buttonProps}
      >
        {content}Logout
      </button>
    </>
  )
};

export default Logout;