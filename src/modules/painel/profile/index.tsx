import { useState } from 'react';
import { Headline } from '../../../components/headline';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { InputField } from '../../../components/ui/input-field';
import { ProfileForm } from './components/profile-form';
import { mock } from '../../../lib/mocks';

export const ProfilePage = () => {
    // mock do usuário (depois vem da API)
    const [form, setForm] = useState({
        name: 'João da Silva',
        email: 'joao.silva@email.com',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.password && form.password !== form.confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        // aqui entra a chamada da API
        console.log('Atualizar perfil:', form);
    };

    return (
        <main className="page-wrapper">
            <Headline title="Perfil" subtitle="Informações do perfil" />

           <ProfileForm user={mock.users[0]}/>
        </main>
    );
};
