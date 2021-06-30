import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import AppContextProvider from 'context/AppContextProvider'
import MainContainer from "containers/MainContainer/MainContainer";
import Layout from "components/Layout/Layout";

export class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <BrowserRouter>
          <Layout>
            <MainContainer />
          </Layout>
        </BrowserRouter>
      </AppContextProvider>
    );
  }
}

export default App;
