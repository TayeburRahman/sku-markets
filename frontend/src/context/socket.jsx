import useAuth from 'hooks/useAuth';
import { createContext } from 'react';
import { io } from 'socket.io-client';

const serverUrl =
    process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_BASE_URL
        : 'http://localhost:3333';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
    const auth = useAuth();
    const socket = io(serverUrl, {
        auth: (cb) => {
            cb({ token: `Bearer ${auth?.token}` });
        },
        reconnectionDelay: 1000,
        reconnectionAttempts: 10,
        reconnection: true,
        transports: ['websocket'],
    });

    // client-side
    socket.on('connect_error', (err) => {
        console.log(err instanceof Error);
        console.log(err.message);
        console.log(err.data);
    });

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
