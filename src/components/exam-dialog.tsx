import type { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import { Form } from './ui/form';
import { InputField } from './ui/input-field';
import { TextareaField } from './ui/textarea-field';


interface ExamDialogProps {
    exam?: { description?: string; performedBy?: string; notes?: string };
    children: ReactNode;
}

export function ExamDialog({ exam, children }: ExamDialogProps) {
    const isEditing = Boolean(exam);

    const content = {
        title: isEditing ? 'Editar Exame' : 'Criar Novo Exame',
        description: isEditing
            ? 'Atualize as informações do exame selecionado.'
            : 'Preencha os dados abaixo para criar um novo exame.',
        buttonText: isEditing ? 'Salvar Alterações' : 'Criar Exame',
    };

    const form = useForm({
        defaultValues: {
            description: exam?.description ?? '',
            performedBy: exam?.performedBy ?? '',
            notes: exam?.notes ?? '',
        },
    });

    const onSubmit = form.handleSubmit((data) => {
        console.log('SUBMITTED:', data);
    });

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{content.title}</DialogTitle>
                    <DialogDescription>{content.description}</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={onSubmit} className="grid gap-4">
                        <InputField
                            name="description"
                            placeholder="Ex.: RX de Tórax PA"
                            label="Descrição"
                        />

                        <InputField
                            name="performedBy"
                            placeholder="Ex.: Dr. João Silva"
                            label="Responsável"
                        />

                        <TextareaField
                            name="notes"
                            placeholder="Descreva os achados clínicos, observações ou conclusões..."
                            label="Relatório"
                        />

                        <Button>{content.buttonText}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
