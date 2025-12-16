import type { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Trash2 } from 'lucide-react';
import { Button } from '../../../../../components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../../../../components/ui/dropdown-menu';

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
        id: 'actions',
        header: 'Ações',
        cell: ({ row }) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" >
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
