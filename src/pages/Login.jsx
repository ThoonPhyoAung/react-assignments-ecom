import { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// day-10
import { useNavigate } from "react-router-dom";

const Login = () => {
  // use Navigate
  const Navigate = useNavigate();
  // get data from authContext
  const { user, userLogin } = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  //   checking errors
  const [errors, setErrors] = useState({});

  // submit
  const forSubmit = (e) => {
    e.preventDefault(); // to solve page reloading
    const err = validateData();
    if (Object.keys(err).length > 0) {
      return false;
    } else {
      // do login
      let email = emailRef.current.value;
      let password = passwordRef.current.value;
      userLogin(email, password, () => { // () is to use as callback funtciton
        // to go to another page without reload
        Navigate("/");
      });
    }
  };

  //   checking errors
  const validateData = () => {
    let errs = {};
    if (!emailRef.current.value) errs.email = "Email is required";
    if (!passwordRef.current.value) errs.password = "Password is required";
    setErrors(errs);
    return errs; //to use when submit
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="">
        <div className="mt-4 w-full max-w-md p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          {/* email */}
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              ref={emailRef}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <span className="text-red-500 p-4">
              {errors.email ? errors.email : ""}
            </span>
          </div>

          {/* password */}
          <div className="mt-4">
            <label>Password</label>
            <input
              type="password"
              ref={passwordRef}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <span className="text-red-500 p-4">
              {errors.password ? errors.password : ""}
            </span>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            onClick={forSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
