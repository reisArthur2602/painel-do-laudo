import { File, HomeIcon, Users2, UsersIcon } from 'lucide-react';
import { NavLink } from 'react-router';
import { cn } from '../../lib/utils';
import { buttonVariants } from '../ui/button';

export const NavigationMenu = () => {
    const prefix = '/painel';
    const navLinks = [
        {
            href: `${prefix}`,
            label: 'Painel',
            icon: HomeIcon,
        },
        {
            href: `${prefix}/exames`,
            label: 'Exames',
            icon: File,
        },
        {
            href: `${prefix}/pacientes`,
            label: 'Pacientes',
            icon: Users2,
        },
        {
            href: `${prefix}/membros`,
            label: 'Membros',
            icon: UsersIcon,
        },
    ];
    return (
        <nav className="flex items-center gap-4">
            {navLinks.map(({ href, icon: Icon, label }) => (
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
            ))}
        </nav>
    );
};
