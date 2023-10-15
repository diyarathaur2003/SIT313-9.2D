import React, { useContext, useState, useEffect } from 'react';
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from 'firebase/auth'; // Corrected import statements

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function Authent({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setloading] = useState(true);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password); // Corrected function name
  }

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password); // Corrected function name
  }
  async function logout(){
    try{
      await deleteUser(auth.currentUser)
    console.log("User Account is Deleted");

    await auth.signOut();
    console.log("Successfully Signed Out");
    } catch (error){
    console.error(error);
  }
}


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setloading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
