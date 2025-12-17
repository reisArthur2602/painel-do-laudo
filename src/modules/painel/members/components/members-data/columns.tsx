import type { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Trash2 } from 'lucide-react';
import { Badge } from '../../../../../components/ui/badge';
import { Button } from '../../../../../components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../../../../components/ui/dropdown-menu';
import { translateRole } from '../../../../../lib/translate-role';

export const memberColumns: ColumnDef<User>[] = [
    {
        accessorKey: 'name',
        header: () => 'Nome',
        cell: ({ row }) => <div className="font-medium">{row.original.name}</div>,
    },
    {
        accessorKey: 'email',
        header: () => 'E-mail',
        cell: ({ row }) => row.original.email,
    },
    {
        accessorKey: 'role',
        header: () => 'Cargo',
        cell: ({ row }) => {
            const role = row.original.role;
            return (
                <Badge variant={role === 'Admin' ? 'default' : 'secondary'}>
                    {translateRole(role)}
                </Badge>
            );
        },
    },
    {
        accessorKey: 'createdAt',
        header: () => 'Criado em:',
        cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
    },

    {
        id: 'actions',
        header: 'Ações',
        cell: ({ row }) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                        <span className="sr-only">Abrir Menu</span>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => console.log('Remover', row.original.id)}>
                        <Trash2 className="size-4" />
                        <span>Remover</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
];
