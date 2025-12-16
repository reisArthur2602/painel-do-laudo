import { Routes } from 'react-router';
import { PainelRoutes } from './painel';
import { PublicRoutes } from './public';

export default function () {
    return (
        <Routes>
           {PublicRoutes()}
           {PainelRoutes()}
        </Routes>
    );
}
