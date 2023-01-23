import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import UserCard from "../../components/UserCard/UserCard";
import { fetchCount } from "../../redux/slice/usersSlice";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    !isAuthenticated ? navigate("/") : "";
    dispatch(fetchCount());
  }, []);

  return (
    <>
      <Layout>
        <div className="w-full flex justify-center items-center h-screen  bg-gray-600">
          <UserCard />
        </div>
      </Layout>
    </>
  );
}

export default User;
