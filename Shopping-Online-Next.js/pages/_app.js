import React, { StrictMode } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from '../Redux/Store'
import Layout from "../Layout/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <Provider store={store}> 
        <ToastContainer/>
        <Layout>{<Component {...pageProps} />}</Layout>
      </Provider>
    </StrictMode>
  );
}

export default MyApp;
