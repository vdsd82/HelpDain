import React from 'react';

import HomeThreeBlog from '../components/Home/HomeThreeBlog';
import Header from '../components/Home/Header';
import HomeThreeHeroArea from '../components/Home/HomeThreeHeroArea';
import SEO from '../components/seo';
import Footer from '../components/Home/Footer';

const index = () => {
   return (
      <>
         <SEO pageTitle={'Home Three'} />
         <Header />
         <HomeThreeHeroArea />
         <HomeThreeBlog />
         <Footer />
      </>
   );
};

export default index;