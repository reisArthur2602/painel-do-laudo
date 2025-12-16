import { Slash } from 'lucide-react';
import { mock } from '../../lib/mocks';
import { Logo } from './logo';
import { NavigationMenu } from './navigation-menu';
import { Notifications } from './notifications';
import { UserDropdown } from './user-dropdown';

export const Header = () => {
    const user = mock.users[0];

    return (
        <header className="border-b border-muted/30 bg-card">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <Logo />
                {user && <NavigationMenu />}
                {user && (
                    <div className="flex items-center gap-2">
                        <Notifications />
                        <Slash className="-rotate-45 size-4 text-muted-foreground/20" />
                        <UserDropdown user={user} />
                    </div>
                )}
            </div>
        </header>
    );
};
