import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { fetchCount } from "../../redux/slice/usersSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    !isAuthenticated ? navigate("/") : "";
    dispatch(fetchCount());
  }, []);
  return (
    <>
      <Layout>
        <section className="w-full text-gray-600 body-font bg-gray-50  h-screen flex justify-center items-center bg-gray-600">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap  -m-4 text-center  justify-evenly">
              <div className="p-4 sm:w-1/2 lg:w-1/3  hover:scale-105 duration-500">
                <div className=" flex items-center dark:bg-gray-800 justify-between p-4 shadow-gray-100 shadow-sm  rounded-lg bg-white ">
                  <div>
                    <h2 className="text-yellow-500 text-lg font-bold ">
                      Total Balance
                    </h2>
                    <h3 className="mt-2 text-xl font-bold text-yellow-500 text-center">
                      1500
                    </h3>

                    <button className="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                      Balance
                    </button>
                  </div>
                  <div className="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-32 h-32  rounded-full shadow-2xl shadow-yellow-400 border-white  border-dashed border-2  flex justify-center items-center ">
                    <div>
                      <h1 className="text-white text-2xl">Balance</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/3 hover:scale-105 duration-500">
                <div className=" flex items-center dark:bg-gray-800 justify-between p-4  rounded-lg bg-white shadow-gray-100 shadow-sm">
                  <div>
                    <h2 className="text-orange-500 text-lg font-bold text-white">
                      Total Plans
                    </h2>
                    <h3 className="mt-2 text-xl font-bold text-orange-500 text-center">
                      3
                    </h3>

                    <button className="text-sm mt-6 px-4 py-2 bg-orange-400  text-white rounded-lg  tracking-wider hover:bg-orange-500 outline-none">
                      Plans
                    </button>
                  </div>
                  <div className="bg-gradient-to-tr from-orange-500 to-orange-400 w-32 h-32  rounded-full shadow-2xl shadow-orange-400 border-white  border-dashed border-2  flex justify-center items-center ">
                    <div>
                      <h1 className="text-white text-2xl">Plans</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap  -m-4 text-center justify-evenly">
              <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2 hover:scale-105 duration-500">
                <div className=" flex items-center dark:bg-gray-800 justify-between p-4  rounded-lg bg-white shadow-gray-100 shadow-sm">
                  <div>
                    <h2 className="text-red-500 text-lg font-bold text-white">
                      Total Users
                    </h2>
                    <h3 className="mt-2 text-xl font-bold text-red-500 text-center">
                      {count.length > 0 ? count[0].userCount : ""}
                    </h3>
                    <button className="text-sm mt-6 px-4 py-2 bg-red-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">
                      Users
                    </button>
                  </div>
                  <div className="bg-gradient-to-tr from-red-500 to-red-400 w-32 h-32  rounded-full  border-white  border-dashed border-2  flex justify-center items-center ">
                    <div>
                      <h1 className="text-white text-2xl">Users</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2 hover:scale-105 duration-500">
                <div className=" flex items-center dark:bg-gray-800 justify-between p-4  rounded-lg bg-white shadow-gray-100 shadow-sm">
                  <div>
                    <h2 className="text-green-500 text-lg font-bold text-white">
                      Total Views
                    </h2>
                    <h3 className="mt-2 text-xl font-bold text-green-500 text-center">
                      {count.length > 0 ? count[0].viewCount[0].sum_val : ""}
                    </h3>

                    <button className="text-sm mt-6 px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-green-500 outline-none">
                      Views
                    </button>
                  </div>
                  <div className="bg-gradient-to-tr from-green-500 to-green-500 w-32 h-32  rounded-full  border-white  border-dashed border-2  flex justify-center items-center ">
                    <div>
                      <h1 className="text-white text-2xl">Views</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Dashboard;
