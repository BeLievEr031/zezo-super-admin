import React, { useEffect } from "react";
import { useState } from "react";
import { login } from "../../http/index";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    isAuthenticated ? navigate("/dashboard") : "";
  }, []);

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleLoginUser = async () => {
    const data = new FormData();
    data.append("email", userData.email);
    data.append("password", userData.password);

    if (email && password) {
      setLoading(true);
      try {
        const response = await login(data);
        if (response.status === 200) {
          if (response.data.message === "username or password is incorrect!") {
            toast.error("username or password is incorrect!");
            setLoading(false);
            return;
          }
          const { accessToken, refreshToken } = response.data.data;
          const { user } = response.data.data;
          // console.log(user);

          toast.success("Login successfully");
          setLoading(false);
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          window.location.href = "/dashboard";
          dispatch(setAuth(user));
        }
      } catch (error) {
        setLoading(false);
        console.log(error.response);
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    email: e.target.value,
                  });
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={userData.password}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    password: e.target.value,
                  });
                }}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                console.log(userData);
                handleLoginUser();
              }}
              className="w-full border-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {loading ? "loading" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
