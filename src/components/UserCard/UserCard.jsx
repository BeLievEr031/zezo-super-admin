import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slice/usersSlice";
import ClockLoader from "react-spinners/ClockLoader";
import toast from "react-hot-toast";

function UserCard() {
  const { data: users } = useSelector((state) => state.user);
  const { count } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [pop, setPop] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });
  useEffect(() => {
    dispatch(fetchUser(pagination.page, pagination.limit));
  }, [pagination]);

  const headlePrev = () => {
    if (pagination.page > 1) {
      setPagination({
        ...pagination,
        page: pagination.page - 1,
      });
    } else {
      toast.error("You are on first page");
    }
  };

  const handleNext = () => {
    if (pagination.page < Math.ceil(+count[0].userCount / pagination.limit)) {
      setPagination({
        ...pagination,
        page: pagination.page + 1,
      });
    } else {
      toast.error("No more posts");
    }
  };

  return (
    <>
      {users.length > 0 ? (
        <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    domain
                  </th>
                  <th scope="col" className="px-6 py-3">
                    subscription
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {/* <button className="rounded-lg w-full h-full px-3 py-1 bg-blue-500 text-white ">
                  Add user
                </button> */}

                    <button
                      data-modal-target="authentication-modal"
                      data-modal-toggle="authentication-modal"
                      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                      onClick={() => {
                        setPop(true);
                      }}
                    >
                      Add user
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sandeep Rajak
                  </th>
                  <td className="px-6 py-4">sandyrajak031@gmail.com</td>
                  <td className="px-6 py-4">8923894909</td>
                  <td className="px-6 py-4">http://localhost:3000</td>
                  <td className="px-6 py-4">Standard</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sandeep Rajak
                  </th>
                  <td className="px-6 py-4">sandyrajak031@gmail.com</td>
                  <td className="px-6 py-4">8923894909</td>
                  <td className="px-6 py-4">http://localhost:3000</td>
                  <td className="px-6 py-4">Standard</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sandeep Rajak
                  </th>
                  <td className="px-6 py-4">sandyrajak031@gmail.com</td>
                  <td className="px-6 py-4">8923894909</td>
                  <td className="px-6 py-4">http://localhost:3000</td>
                  <td className="px-6 py-4">Standard</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sandeep Rajak
                  </th>
                  <td className="px-6 py-4">sandyrajak031@gmail.com</td>
                  <td className="px-6 py-4">8923894909</td>
                  <td className="px-6 py-4">http://localhost:3000</td>
                  <td className="px-6 py-4">Standard</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sandeep Rajak
                  </th>
                  <td className="px-6 py-4">sandyrajak031@gmail.com</td>
                  <td className="px-6 py-4">8923894909</td>
                  <td className="px-6 py-4">http://localhost:3000</td>
                  <td className="px-6 py-4">Standard</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sandeep Rajak
                  </th>
                  <td className="px-6 py-4">sandyrajak031@gmail.com</td>
                  <td className="px-6 py-4">8923894909</td>
                  <td className="px-6 py-4">http://localhost:3000</td>
                  <td className="px-6 py-4">Standard</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sandeep Rajak
                  </th>
                  <td className="px-6 py-4">sandyrajak031@gmail.com</td>
                  <td className="px-6 py-4">8923894909</td>
                  <td className="px-6 py-4">http://localhost:3000</td>
                  <td className="px-6 py-4">Standard</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sandeep Rajak
                  </th>
                  <td className="px-6 py-4">sandyrajak031@gmail.com</td>
                  <td className="px-6 py-4">8923894909</td>
                  <td className="px-6 py-4">http://localhost:3000</td>
                  <td className="px-6 py-4">Standard</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sandeep Rajak
                  </th>
                  <td className="px-6 py-4">sandyrajak031@gmail.com</td>
                  <td className="px-6 py-4">8923894909</td>
                  <td className="px-6 py-4">http://localhost:3000</td>
                  <td className="px-6 py-4">Standard</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sandeep Rajak
                  </th>
                  <td className="px-6 py-4">sandyrajak031@gmail.com</td>
                  <td className="px-6 py-4">8923894909</td>
                  <td className="px-6 py-4">http://localhost:3000</td>
                  <td className="px-6 py-4">Standard</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr> */}

                {users.map((user, index) => {
                  return (
                    <tr
                      key={index}
                      className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {user.name}
                      </th>
                      <td className="px-6 py-4"> {user.email}</td>
                      <td className="px-6 py-4"> {user.phone}</td>
                      <td className="px-6 py-4">{user.domain}</td>
                      <td className="px-6 py-4">Standard</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {pop ? (
            <section
              className="absolute top-0 left-0  w-screen h-screen "
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-screen bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Sandy"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password here"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="name"
                        placeholder="Enter Phone Here"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="Domain"
                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Domain
                      </label>
                      <input
                        type="text"
                        name="Domain"
                        id="Domain"
                        placeholder="Enter Domain here"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>

                    <div className="flex w-full justify-evenly">
                      <button
                        type="submit"
                        className="w-1/3 border-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={() => {
                          setPop(false);
                        }}
                      >
                        {/* {loading ? "loading" : "Sign in"} */}
                        CANCLE
                      </button>
                      <button
                        type="submit"
                        className="w-1/3 border-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        {/* {loading ? "loading" : "Sign in"} */}
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            ""
          )}

          <div className="absolute bottom-2 right-2">
            <div className="flex flex-col items-center">
              <div className="inline-flex mt-2 xs:mt-0">
                <button
                  onClick={() => {
                    headlePrev();
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    handleNext();
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ClockLoader
          color={"white"}
          loading={true}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
}

export default UserCard;
