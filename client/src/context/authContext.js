import { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // const [authState, dispatch] = useReducer(authReducer, {
  //   isAuthenticated: false,
  //   user: null,
  // });

  //login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        userForm
      );
      console.log(response);
      if (response.success) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //register
  const registerUser = async (userForm) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        userForm
      );
      if (response.statusText === "OK") {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const authContextData = { loginUser, registerUser };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
