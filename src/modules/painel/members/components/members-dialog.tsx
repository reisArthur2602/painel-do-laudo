import { Lock } from 'lucide-react';
import type { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, AlertDescription, AlertTitle } from '../../../../components/ui/alert';
import { Button } from '../../../../components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../../../components/ui/dialog';
import { Form } from '../../../../components/ui/form';
import { InputField } from '../../../../components/ui/input-field';

interface IMembersDialog {
    user?: User;
    children: ReactNode;
}

export const MembersDialog = ({ user, children }: IMembersDialog) => {
    const isEditing = Boolean(user);

    const content = {
        title: isEditing ? 'Editar Usuário' : 'Novo Usuário',
        description: isEditing
            ? 'Atualize as informações do usuário selecionado.'
            : 'Preencha os dados para registrar um novo usuário no sistema.',
        buttonText: isEditing ? 'Salvar Alterações' : 'Criar Usuário',
    };

    const form = useForm({
        defaultValues: {
            name: user?.name ?? '',
            email: user?.email ?? '',
        },
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
                    <form className="grid gap-4">
                        <InputField name="name" label="Nome" placeholder="Nome completo" />

                        <InputField name="email" label="Email" placeholder="usuario@empresa.com" />

                        <Button>{content.buttonText}</Button>
                    </form>
                </Form>

                <Alert className="border-primary bg-primary/30 text-primary">
                    <Lock />
                    <AlertTitle className="font-semibold">
                        Senha padrão gerada pelo sistema
                    </AlertTitle>
                    <AlertDescription className="text-primary text-sm">
                        Ao criar um novo usuário, a senha inicial será "master@12345"
                    </AlertDescription>
                </Alert>
            </DialogContent>
        </Dialog>
    );
};
