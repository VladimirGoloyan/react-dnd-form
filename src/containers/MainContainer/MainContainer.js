import React, { useContext } from "react";
import { AppContext } from "context/AppContext";

import Sidebar from "containers/Sidebar/Sidebar";
import FormContainer from "components/FormContainer/FormContainer";

import "./MainContainer.scss";

const MainContainer = () => {
  const context = useContext(AppContext);

  context.dispatch({ type: "SET_USER", payload: {} });

  return (
    <div className="app-main-container">
      <Sidebar />
      <FormContainer />
    </div>
  );
};

export default MainContainer;
