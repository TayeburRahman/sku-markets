import AlertsAdd from 'components/Alerts/AlertsAdd';
import WhatsappAlerts from 'components/Alerts/WhatsappAlerts';
import SKUMarquee from 'components/common/Marquee';
import Footer from 'components/ProductDetail/Footer';
import ResponsiveAppBar from 'components/ProductDetail/Header';

const Alerts = () => {
    return (
        <>
            <ResponsiveAppBar />
            <SKUMarquee />
            <AlertsAdd />
            <WhatsappAlerts />
            <Footer />
        </>
    );
};

export default Alerts;
