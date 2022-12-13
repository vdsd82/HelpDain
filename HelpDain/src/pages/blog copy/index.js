import React from 'react';
import CalcArea from '../../components/Calculator/CalcArea';
import CalcBreadCrumb from '../../components/Calculator/CalcBreadCrumb';
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import SEO from '../../components/seo';

const index = () => {
   return (
      <>
         <SEO pageTitle={'Calc'} />
         <Header />
         <BgShape />
         <CalcBreadCrumb />
         <CalcArea />
         <Footer />
      </>
   );
};

export default index;