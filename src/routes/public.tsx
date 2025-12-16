import { Route } from 'react-router';
import { AuthPage } from '../modules/auth';

export const PublicRoutes = () => {
    return (
        <Route path="/">
            <Route index element={<AuthPage />} />
        </Route>
    );
};
