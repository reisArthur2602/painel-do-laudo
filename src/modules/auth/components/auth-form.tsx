import { User2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { CardInfo } from '../../../components/info';
import { Button } from '../../../components/ui/button';
import { Form } from '../../../components/ui/form';
import { InputField } from '../../../components/ui/input-field';

export const AuthForm = () => {
    const form = useForm();
    return (
        <Form {...form}>
            <div className="flex flex-col gap-4 mx-auto max-w-sm w-full">
                <CardInfo
                    padding={2}
                    border={false}
                    icon={User2}
                    label="Entrar"
                    value={
                        <span className="text-muted-foreground">
                            {' '}
                            Acesse o sistema de laudos com suas credenciais.
                        </span>
                    }
                />

                <form className="flex flex-col gap-4">
                    <InputField name="email" placeholder="seuemail@dominio.com" label="Email" />
                    <InputField name="password" placeholder="******" label="Senha" />
                    <Button> Entrar</Button>
                    <p className="text-xs text-muted-foreground text-center">
                        Ao entrar, você concorda com as políticas da sua organização.
                    </p>
                </form>
            </div>
        </Form>
    );
};
