import React from 'react';

const HomeThreeHeroArea = () => {
   return (
      <>
         <section className="hero__area hero__height hero__height-3 grey-bg-3 d-flex align-items-center" 
         style={{background:`url(assets/img/hero/sl-bg.jpg)`,backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-9 col-xl-10 col-lg-11 col-md-12 col-sm-12">
                     <div className="hero__content hero__content-white text-center">
                        <h2 className="hero__title">
                           The Best Lifestyle and Medical Calculator
                        </h2>
                        <p><b>Helpdain.com </b> is a medical calculator and blog site that offers a wide range of tools and resources for healthcare professionals and individuals interested in learning more about healthcare and medicine. Our medical calculator allows users to quickly and easily perform complex calculations, such as determining medication dosages and interpreting lab results.</p>
                        <div className="hero__search">
                           <form action="#">
                              <div className="hero__search-inner hero__search-3 d-md-flex align-items-center">
                                 <div className="hero__search-input">
                                    <span><i className="far fa-search"></i></span>
                                    <input type="text" placeholder="Search for blog or calculator"/>
                                 </div>
                                 <button type="submit" className="m-btn ml-20"> <span></span> search</button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeHeroArea;