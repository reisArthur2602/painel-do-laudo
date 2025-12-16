import { Route } from 'react-router';
import { ExamsPage } from '../modules/painel/exams';
import { ExamPage } from '../modules/painel/exams/exam';
import { PainelPage } from '../modules/painel/home';
import { UsersPage } from '../modules/painel/members';
import { PatientsPage } from '../modules/painel/patients';
import { PatientPage } from '../modules/painel/patients/patient';
import { ProfilePage } from '../modules/painel/profile';

export const PainelRoutes = () => {
    return (
        <Route path="/painel">
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
