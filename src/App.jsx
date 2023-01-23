import "./index.css";
import React, { useEffect, useState } from "react";
import Login from "./pages/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  // const [loading, setLoading] = useState(false);/

  return loading ? (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  ) : (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/adduser" element={<Adduser />} /> */}
          <Route path="/users" element={<User />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
