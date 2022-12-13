import React from 'react';
import CalcDetailsArea from '../../components/CalcDetails/CalcDetailsArea';
import BgShape from '../../components/common/BgShape';
import Header from '../../components/Home/Header';
import SEO from '../../components/seo';
import Footer from '../../components/Home/Footer';


const CalcDetails = () => {

   return (
      <>
         <SEO pageTitle={'Calc Details'} />
         <Header />
         <BgShape />
         <CalcDetailsArea />
         <Footer />
      </>
   );
};

export default CalcDetails;