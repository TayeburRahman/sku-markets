import SKUMarquee from "components/common/Marquee";
import Footer from "components/ProductDetail/Footer";
import ResponsiveAppBar from "components/ProductDetail/Header";
import DataStoreag from "components/watchlist/DataStoreag";
import WatchlistTable from "components/watchlist/WatchlistTable";


const WatchList = () => {
    return (
        <div>
        <ResponsiveAppBar/>
        <SKUMarquee/>
         <DataStoreag/>
        <WatchlistTable/>
        <div className="mt-5">
        <Footer/>
        </div>
        
    </div>
    );
};

export default WatchList;