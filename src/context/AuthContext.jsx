import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(); //create context

// make context to use as global
export const AuthProvider = ({ children }) => {
  // stored users , to know changes about user and make changes immediately
  const [user, setUser] = useState({});

  //   user login
  const userLogin = (email, password, navigateCallBack) => {
    // navigateCallBack is naming for function
    // login
    // if login successeful, also use callback
    let isLoginSuccess = true;

    if (isLoginSuccess) {
      const userObj = {
        email,
        password,
      };
      console.log("email", email);
      // if login success , take user information with email, set user state
      setUser(userObj);
      localStorage.setItem("user", JSON.stringify(userObj));
      if (navigateCallBack) navigateCallBack(); // if name have do as function
    }
  };

  // user logout
  const logout = () => {
    localStorage.removeItem("user");
    // clear usestate storage
    setUser(null);
  };

  return (
    // when same key and value of obj, save obj as {user} in value
    <AuthContext.Provider value={{ user, userLogin, logout }}>
      {" "}
      {children}
    </AuthContext.Provider>
  );
};
