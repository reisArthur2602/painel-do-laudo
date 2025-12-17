import { Navigate, Outlet, Route } from 'react-router';
import { Headline } from '../components/headline';
import { InfoContent } from '../components/info';
import { Skeleton } from '../components/ui/skeleton';
import { mock } from '../lib/mocks';
import { ExamsPage } from '../modules/painel/exams';
import { ExamPage } from '../modules/painel/exams/exam';
import { PainelPage } from '../modules/painel/home';
import { UsersPage } from '../modules/painel/members';
import { PatientsPage } from '../modules/painel/patients';
import { PatientPage } from '../modules/painel/patients/patient';
import { ProfilePage } from '../modules/painel/profile';

const AppLoading = () => {
    return (
        <main className="page-wrapper">
            <Headline title="Painel" subtitle="Visão Geral" />
            <InfoContent>
                <Skeleton className="w-full h-24.5" />
                <Skeleton className="w-full h-24.5" />
                <Skeleton className="w-full h-24.5" />
                <Skeleton className="w-full h-24.5" />
            </InfoContent>

            <section className="grid grid-cols-2 gap-6">
                <Skeleton className="h-80 w-full" />
                <Skeleton className="h-80 w-full" />
            </section>
        </main>
    );
};

const AuthPainelGuard = () => {
    const user = mock.users[0];
    const loading = false;

    if (loading) return <AppLoading />;
    if (!user && !loading) return <Navigate to="/" />;

    return <Outlet />;
};

export const PainelRoutes = () => {
    return (
        <Route path="/painel" element={<AuthPainelGuard />}>
            <Route index element={<PainelPage />} />
            <Route path="perfil" element={<ProfilePage />} />
            <Route path="membros" element={<UsersPage />} />
            <Route path="exames" element={<ExamsPage />} />
            <Route path="exames/:id" element={<ExamPage />} />
            <Route path="pacientes" element={<PatientsPage />} />
            <Route path="pacientes/:id" element={<PatientPage />} />
        </Route>
    );
};
