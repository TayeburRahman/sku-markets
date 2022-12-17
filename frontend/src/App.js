import LoaderPro from 'components/loader/LoaderPro';
import { useEffect, useState } from 'react';
import Routes from 'router';

import './assets/scss/Saas.scss';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    }, []);

    if (isLoading) {
        return <LoaderPro></LoaderPro>;
    }

    return <Routes />;
}

export default App;
