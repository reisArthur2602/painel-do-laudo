import type { ColumnDef } from '@tanstack/react-table';
import { File, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../../../../../components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../../../../components/ui/dropdown-menu';

export const examColumns: ColumnDef<Exam>[] = [
    {
        accessorKey: 'description',
        header: 'Exame',
        cell: ({ row }) => row.original.description,
    },
    {
        accessorKey: 'patient.name',
        header: 'Paciente',
        cell: ({ row }) => row.original.patient.name,
    },
    {
        accessorKey: 'createdAt',
        header: 'Data de realização',
        cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString('pt-BR'),
    },
    {
        id: 'actions',
        header: 'Ações',
        cell: ({ row }) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <span className="sr-only">Abrir menu</span>
                        <MoreHorizontal className="size-4" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                        <Link
                            to={`/painel/exames/${row.original.id}`}
                            className="flex items-center gap-2"
                        >
                            <File className="size-4" />
                            <span>Ver detalhes</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
];
