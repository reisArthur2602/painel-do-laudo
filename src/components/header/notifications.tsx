import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { getNotificationMessage } from '../../lib/get-notification.message';
import { mock } from '../../lib/mocks';
import { CardInfo } from '../info';

export const Notifications = () => {
    const navigate = useNavigate();
    const notifications = mock.notifications;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="outline-none">
                    <Bell className="size-4" />
                    <span className="sr-only">Abrir notificações</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notificações</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    {notifications.map((notification) => {
                        const meta = getNotificationMessage(notification.type);

                        return (
                            <DropdownMenuItem
                                key={notification.id}
                                onClick={() => navigate(`/painel/exames/${notification.examId}`)}
                                className="flex items-start gap-3 py-3"
                                asChild
                            >
                                <CardInfo
                                    border={false}
                                    
                                    padding={4}
                                    icon={meta.icon}
                                    label={meta.title}
                                    value={
                                        <span className="text-muted-foreground">
                                            {meta.description}
                                        </span>
                                    }
                                />
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
