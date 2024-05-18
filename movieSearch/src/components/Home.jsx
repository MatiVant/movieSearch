import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  return (
    <div style={{height: '100vh',  display: "flex", alignItems: "center", justifyContent: "center"}} >
      {!token && <Navigate to="/login" />}
      <h1 style={{ color: "white", fontSize: '200px' }}>BIENVENIDXS</h1>

      {/* <button onClick={() => navigate("/listado")}>LISTADO </button> */}
    </div>
  );
};

export default Home;
