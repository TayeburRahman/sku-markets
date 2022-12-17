import React from "react";
import SKUMarquee from "components/common/Marquee";
import ResponsiveAppBar from "components/ProductDetail/Header";
import Footer from "components/ProductDetail/Footer";
import MarketPlaceHero from "components/Marketplace/marketHero";
import TopRankedMarketplace from "components/Marketplace/topRankedMarketplace";

import './skumarkets.css';
const SKUMarkets = () => {
    return (
        <div>
      <ResponsiveAppBar />
      <div className="">
        <SKUMarquee />
      </div>
      <MarketPlaceHero />
      <TopRankedMarketplace />
      <Footer />
    </div>
    );
};

export default SKUMarkets;