import { useRoutes } from 'react-router-dom';
import auth from './auth';
import main from './main';

export default function ThemeRoutes() {
    const router = [...main, ...auth];

    return useRoutes(router);
}
