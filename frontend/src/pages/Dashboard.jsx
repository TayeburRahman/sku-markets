import Marquee from 'components/common/Marquee';
import Footer from 'components/ProductDetail/Footer';
import Header from 'components/ProductDetail/Header';

import DashboardHero from 'components/dashboard/dashboarHero';

const Dashboard = () => {
    return (
        <div className="bg-white">
            <Header />
            <div className="mt-3">
                <Marquee />
            </div>
            <DashboardHero />
            <Footer />
        </div>
    );
};

export default Dashboard;
