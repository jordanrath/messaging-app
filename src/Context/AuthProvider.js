import React, { useEffect, useMemo, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import authStatuses from '../Defines/authStatuses';
import { auth } from '../Firebase';
import { AuthContext } from './AuthContext';

// receive the children with access to context
const AuthProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [authStatus, setAuthStatus] = useState(authStatuses.signedOut);

    useEffect(() => {
      if (user === null && authStatus === authStatuses.signingOut) {
          setAuthStatus(authStatuses.signedOut);
      } else if (user !== null && authStatus === authStatuses.signingIn){
          setAuthStatus(authStatuses.signedIn);
      } else {

      }
  }, [user, authStatus])
    
  const contextValues = useMemo(() => ({
    user,
    authStatus,
    setAuthStatus,
   }), [user, authStatus]);

  return (
    <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;