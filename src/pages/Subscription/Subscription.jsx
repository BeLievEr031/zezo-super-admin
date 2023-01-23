import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import SubscriptionCard from "../../components/SubscriptionCard/SubscriptionCard";

function Subscription() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    !isAuthenticated ? navigate("/") : "";
  }, []);
  return (
    <>
      <Layout>
        <div className="flex justify-evenly w-full h-screen items-center  bg-gray-600">
          <SubscriptionCard amount={49} plan={"Basic"} />
          <SubscriptionCard amount={129} plan={"Standard"} />
          <SubscriptionCard amount={299} plan={"Premium"} />
        </div>
      </Layout>
    </>
  );
}

export default Subscription;
