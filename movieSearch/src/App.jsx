import React, { createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import FavProvider from "./FavProvider";
import Spinner from "./components/Spinner";

const App = () => {
  const navigation = useNavigate()
  const isLoading = navigation.state === "loading"

  return (
 
      <FavProvider>
        <div style={{ minHeight: "100vh" }}>
          {isLoading ? <Spinner /> : <Header />}
          <div style={{ paddingTop: "80px", paddingBottom: "80px" }}>
            <Outlet />
          </div>
        </div>
      </FavProvider>
 
  );
};

export default App;
