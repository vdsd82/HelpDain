import React from 'react';
import 'react-responsive-modal/styles.css';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}



const App = ({ Component, pageProps }) => {

  return <Component {...pageProps} />
}

export default App
