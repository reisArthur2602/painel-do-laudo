import { Link } from 'react-router';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface IUserDropdown {
    user: {
        email: string;
        name: string;
    };
}

const getUserInitials = (name: string) => {
    return name
        .split(' ')
        .map((word) => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
};

const getRandomAvatar = (name: string) => {
    const seed = encodeURIComponent(name.toLowerCase());
    return `https://api.dicebear.com/7.x/shapes/svg?seed=${seed}`;
};

export const UserDropdown = ({ user }: IUserDropdown) => {
    const handleLogout = () => {
        console.log('desloguei do usuario' + user);
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="size-8">
                    <AvatarImage src={getRandomAvatar(user.name)} alt={user.name} />
                    <AvatarFallback>{getUserInitials(user.name)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="flex flex-col">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">{user.email}</span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link to="/painel/perfil">Perfil</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="text-destructive focus:text-destructive"
                    onClick={handleLogout}
                >
                    Sair da conta
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
