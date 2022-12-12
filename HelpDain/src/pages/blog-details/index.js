import React from 'react';
import BlogDetailsArea from '../../components/BlogDetails/BlogDetailsArea';
import BgShape from '../../components/common/BgShape';
import Header from '../../components/Home/Header';
import SEO from '../../components/seo';
import Footer from '../../components/Home/Footer';


const BlogDetails = () => {

   return (
      <>
         <SEO pageTitle={'Blog Details'} />
         <Header />
         <BgShape />
         <BlogDetailsArea />
         <Footer />
      </>
   );
};

export default BlogDetails;