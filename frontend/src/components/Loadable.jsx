import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Suspense } from 'react';

const LoaderWrapper = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2001,
    width: '100%',
    '& > * + *': {
        marginTop: theme.spacing(2),
    },
}));

const Loader = () => (
    <LoaderWrapper>
        <LinearProgress color="primary" />
    </LoaderWrapper>
);

const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );

export default Loadable;
