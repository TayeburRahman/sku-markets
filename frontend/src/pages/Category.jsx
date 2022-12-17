import React from "react";
import SKUMarquee from "components/common/Marquee";
import ResponsiveAppBar from "components/ProductDetail/Header";
import Footer from "components/ProductDetail/Footer";
import CatHero from "components/Category/catHero";
import TopRankedCat from "components/Category/TopRankedCat";
import "../components/Category/category.css";

const Category = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="">
        <SKUMarquee />
      </div>
      <CatHero />
      <TopRankedCat />
      <Footer />
    </div>
  );
};
export default Category;
