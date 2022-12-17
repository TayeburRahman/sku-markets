import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import TopBarLogo from '../../assets/images/noon-saudi.svg';

const items = [
    {
        id: 1,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 2,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 3,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 4,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 5,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 6,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 7,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 8,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 9,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 10,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 11,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 12,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 13,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 14,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 15,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
    {
        id: 16,
        image: TopBarLogo,
        brand: 'N35997789A',
    },
];

const SKUMarquee = () => {
    const navigate = useNavigate();
    return (
        <div className="container-fluid">
            <div className="marquee-area">
                <div className="ticker">
                    <div className="news d-flex align-items-center">
                        <Marquee pauseOnHover loop={0} speed={50}>
                            <div className="marquee-main d-flex align-items-center fs-5">
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="d-flex align-items-center px-3"
                                        style={{
                                            borderRight: '2px solid gray',
                                        }}
                                        onClick={() => {
                                            navigate('/marketplace');
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.brand}
                                            height={
                                                item.brand === 'amazon'
                                                    ? 15
                                                    : 15
                                            }
                                            width="100%"
                                        />

                                        <p className="text-bold ms-2 me-1 my-0 text-primary fs-6">
                                            {item.brand}
                                        </p>
                                        <p className="mx-1 my-0 fs-6">
                                            $1199.21
                                        </p>

                                        <p className="text-danger mx-1 my-0 fs-6">
                                            -2.021%
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Marquee>
                    </div>
                    <div class="marquee-select d-flex">
                        <i class="marquee-i fa-solid fa-arrow-right"></i>
                        <div class="sku-m ">
                            <a href="" className="fs-5">
                                <i class="fa-solid fa-arrow-right"></i>SKU
                                MARKETS{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SKUMarquee;
