import React from 'react';
import { Provider } from 'react-redux';
import 'react-responsive-modal/styles.css';
import './index.scss';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from "firebase/app";
import SEO from '../components/seo';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


const firebaseConfig = {
  apiKey: "AIzaSyDbmhdQyYo42BS4i3zLAcUhZEk0FfPWgfA",
  authDomain: "helpdain-903c9.firebaseapp.com",
  projectId: "helpdain-903c9",
  storageBucket: "helpdain-903c9.appspot.com",
  messagingSenderId: "365643903871",
  appId: "1:365643903871:web:ffa41433f1a55519e5a04a",
measurementId: "G-437F9NCKFE"

};
initializeApp(firebaseConfig);


function MyApp({ Component, pageProps }) {

  return (
    <>
      <SEO font={'https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@300;400;500;600;700;800&display=swap'} />
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  )
}

export default MyApp
