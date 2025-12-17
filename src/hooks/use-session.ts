import { mock } from '../lib/mocks';

export const useSession = () => {
    const user = mock.users[1];
    const loading = false;

    return { user, loading, isAuth: Boolean(user) };
};
