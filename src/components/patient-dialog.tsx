import type { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import { Form } from './ui/form';
import { InputField } from './ui/input-field';

interface PatientDialogProps {
    patient?: Patient;
    children: ReactNode;
}

export const PatientDialog = ({ patient, children }: PatientDialogProps) => {
    const form = useForm({
        defaultValues: {
            name: patient?.name ?? '',
            cpf: patient?.cpf ?? '',
            phone: patient?.phone ?? '',
            birthDate: patient?.birthDate
                ? new Date(patient.birthDate).toISOString().slice(0, 10)
                : '',
        },
    });

    const isEditing = Boolean(patient);

    const content = {
        title: isEditing ? 'Editar Paciente' : 'Cadastrar Paciente',
        description: isEditing
            ? 'Atualize as informações do paciente selecionado.'
            : 'Preencha os dados abaixo para cadastrar um novo paciente.',
        buttonText: isEditing ? 'Salvar alterações' : 'Criar paciente',
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{content.title}</DialogTitle>
                    <DialogDescription>{content.description}</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form className="grid gap-4">
                        <InputField placeholder="Nome completo" name="name" label="Nome" />

                        <InputField placeholder="000.000.000-00" name="cpf" label="CPF" />

                        <InputField placeholder="(00) 00000-0000" name="phone" label="Telefone" />

                        <InputField
                            placeholder="00/00/0000"
                            name="birthDate"
                            label="Data de nascimento"
                            type="date"
                        />
                    </form>
                </Form>

                <DialogFooter>
                    <Button className="w-full">{content.buttonText}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
