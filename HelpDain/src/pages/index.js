import React from 'react';

import HomeThreeBlog from '../components/Home/HomeThreeBlog';
import Header from '../components/Home/Header';
import HomeThreeHeroArea from '../components/Home/HomeThreeHeroArea';
import Footer from '../components/home/Footer';
import SEO from '../components/seo';

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