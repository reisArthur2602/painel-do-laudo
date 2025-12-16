import { CheckCircle } from 'lucide-react';

import { useState } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../../../../../components/ui/alert-dialog';
import { Button } from '../../../../../components/ui/button';

interface ExamRealeaseAlertProps {
    examId: string;
    canRelease: boolean;
}

export const ExamRelease = ({ examId, canRelease }: ExamRealeaseAlertProps) => {
    const [open, setOpen] = useState(false);

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button disabled={!canRelease}>
                    <CheckCircle size={16} /> Liberar Exame
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirmar ação</AlertDialogTitle>
                    <AlertDialogDescription>
                        Tem certeza que deseja continuar? Esta operação não poderá ser desfeita.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Liberar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
