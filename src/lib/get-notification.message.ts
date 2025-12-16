import { ClipboardList, Package } from 'lucide-react';

export const getNotificationMessage = (type: NotificationType) => {
    const map = {
        ExamCreated: {
            title: 'Novo exame registrado',
            description: 'Um novo exame foi adicionado ao sistema.',
            icon: ClipboardList,
        },
        ExamAwaitingPickup: {
            title: 'Exame aguardando retirada',
            description: 'Um exame está pronto para retirada.',
            icon: Package,
        },
    } satisfies Record<
        NotificationType,
        {
            title: string;
            description: string;
            icon: React.ElementType;
        }
    >;

    return map[type];
};
