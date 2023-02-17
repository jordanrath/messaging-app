// import { AuthContext } from 'firebase-react-hooks';
// import React, { useEffect, useState } from 'react'

// // receive the children with access to context
// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     // get user from firebase
//     useEffect(() => {
//       const currentUser = getUser();
//       setUser(currentUser);  
//     }, [])
    

//   return (
//     <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;