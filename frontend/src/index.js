import { store } from 'app/store';
import Message from 'components/Message';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                {/* <SocketProvider> */}
                <Message />
                <App />
                {/* </SocketProvider> */}
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
