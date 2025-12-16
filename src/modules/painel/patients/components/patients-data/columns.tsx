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
import { formatCPF } from '../../../../../lib/format-cpf';
import { formatPhone } from '../../../../../lib/format-phone';

export const patientColumns: ColumnDef<Patient>[] = [
    {
        accessorKey: 'name',
        header: 'Nome',
        cell: ({
            row: {
                original: { name },
            },
        }) => name,
    },
    {
        accessorKey: 'CPF',
        header: 'CPF',
        cell: ({
            row: {
                original: { cpf },
            },
        }) => formatCPF(cpf),
    },
    {
        accessorKey: 'phone',
        header: 'Telefone',
        cell: ({
            row: {
                original: { phone },
            },
        }) => formatPhone(phone),
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
                            to={`/painel/pacientes/${row.original.id}`}
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
