import "./index.css";
import React, { useEffect, useState } from "react";
import Login from "./pages/Auth/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Adduser from "./pages/Adduser/Adduser";
import User from "./pages/User/User";
import Subscription from "./pages/Subscription/Subscription";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { loading } = useLoadingWithRefresh();

  return loading ? (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  ) : (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <BrowserRouter>
        <Routes>
          {!isAuthenticated && <Route path="/" element={<Login />} />}
          {isAuthenticated && (
            <Route path="/dashboard" element={<Dashboard />} />
          )}
          {/* <Route path="/adduser" element={<Adduser />} /> */}
          {isAuthenticated && <Route path="/users" element={<User />} />}
          {isAuthenticated && (
            <Route path="/subscription" element={<Subscription />} />
          )}

          <Route
            path="*"
            element={
              <Navigate
                to={
                  isAuthenticated
                    ? user.role === "super"
                      ? "/dashboard"
                      : "/"
                    : "/"
                }
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
