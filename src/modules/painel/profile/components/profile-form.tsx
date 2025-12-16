import { useForm } from 'react-hook-form';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card';
import { Form } from '../../../../components/ui/form';
import { InputField } from '../../../../components/ui/input-field';

interface IProfileForm {
    user: User;
}
export const ProfileForm = ({ user }: IProfileForm) => {
    const form = useForm({ defaultValues: { name: user.name, email: user.email } });
    return (
        <Form {...form}>
            <Card>
                <CardHeader>
                    <CardTitle>Dados da conta</CardTitle>
                </CardHeader>

                <CardContent>
                    <form className="grid gap-4">
                        <InputField name="name" placeholder="Seu nome" label="Nome" />
                        <InputField
                            name="email"
                            placeholder="email@email.com"
                            label="Email"
                            readOnly
                            disabled
                        />
                        <InputField
                            name="password"
                            type="password"
                            placeholder="Nova senha"
                            label="Nova senha"
                        />

                        <Button>Salvar alterações</Button>
                    </form>
                </CardContent>
            </Card>
        </Form>
    );
};
