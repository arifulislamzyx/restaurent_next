// import app from "@/firebase/firebase.config";
// import React, { ReactNode, createContext, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   UserCredential,
// } from "firebase/auth";

// interface AuthProviderProps {
//   children: ReactNode;
// }

// interface User {
//   accessToken: string;
//   email: string;
//   displayName?: string;
//   photoUrl?: string;
// }

// interface AuthInfo {
//   createUser: (email: string, password: string) => Promise<UserCredential>;
//   signIn: (email: string, password: string) => Promise<UserCredential>;
//   logOut: () => Promise<void>;
//   user: User | null;
//   loading: boolean;
// }

// export const AuthContext = createContext<AuthInfo | null>(null);

// const auth = getAuth(app);

// const AuthProviders = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const createUser = (email, password): Promise<UserCredential> => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const authInfo = { createUser, signIn, user, loading, logOut };
//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProviders;
