import { v4 as uuid } from 'uuid';

export const useSession = () => {
    const user: User = {
        id: uuid(),
        name: 'Suporte',
        email: `suporte@suporte.com`,
        password: 'master@12345',
        role: 'Admin',
        logs: [],
        createdAt: String(new Date()),
    };
    const loading = false;

    return { user, loading, isAuth: Boolean(user) };
};
