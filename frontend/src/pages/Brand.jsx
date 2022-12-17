import React from "react";
import SKUMarquee from 'components/common/Marquee';
import ResponsiveAppBar from 'components/ProductDetail/Header';
import Footer from 'components/ProductDetail/Footer';
import BrandHero from "components/Brand/BrandHero";
import TopRanked from "components/Brand/TopRanked";

const Brand = () => {

    return (

        <div>
            <ResponsiveAppBar />
            <div className="">
                <SKUMarquee />
            </div>
           <BrandHero />
           <TopRanked />
            <Footer/>
        </div>

    )

}

export default Brand;