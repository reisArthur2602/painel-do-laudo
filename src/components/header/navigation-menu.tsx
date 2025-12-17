import { File, HomeIcon, Users2, UsersIcon } from 'lucide-react';
import { Navigate, NavLink, useLocation } from 'react-router';
import { hasPermission } from '../../lib/has-permission';
import { cn } from '../../lib/utils';
import { buttonVariants } from '../ui/button';

interface INavigationMenu {
    user: User;
}

export const NavigationMenu = ({ user }: INavigationMenu) => {
    const prefix = '/painel';

    const navLinks = [
        {
            href: `${prefix}`,
            label: 'Painel',
            icon: HomeIcon,
            visible: hasPermission({ allowedRoles: ['Admin'], currentRole: user.role }),
        },
        {
            href: `${prefix}/exames`,
            label: 'Exames',
            icon: File,
            visible: hasPermission({ allowedRoles: ['Admin', 'Member'], currentRole: user.role }),
        },
        {
            href: `${prefix}/pacientes`,
            label: 'Pacientes',
            icon: Users2,
            visible: hasPermission({ allowedRoles: ['Admin', 'Member'], currentRole: user.role }),
        },
        {
            href: `${prefix}/membros`,
            label: 'Membros',
            icon: UsersIcon,
            visible: hasPermission({ allowedRoles: ['Admin'], currentRole: user.role }),
        },
    ];
    return (
        <nav className="flex items-center gap-4">
            {navLinks.map(({ href, icon: Icon, label, visible }) => {
                const { pathname: currentPathname } = useLocation();

                if (currentPathname === href && !visible) return <Navigate to={'/painel/exames'} />;

                return (
                    visible && (
                        <NavLink
                            key={href}
                            to={href}
                            className={({ isActive }) =>
                                cn(
                                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                                    isActive && 'text-primary font-medium',
                                    'hover:bg-transparent'
                                )
                            }
                        >
                            <Icon className="size-4" />
                            <>{label}</>
                        </NavLink>
                    )
                );
            })}
        </nav>
    );
};
