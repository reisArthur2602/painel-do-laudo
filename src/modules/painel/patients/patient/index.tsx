import { Baby, Calendar, File, IdCard, Phone, User2Icon } from 'lucide-react';
import { Navigate, useParams } from 'react-router';
import { ExamDialog } from '../../../../components/exam-dialog';
import { Headline } from '../../../../components/headline';
import { CardInfo, InfoContent } from '../../../../components/info';
import { PatientDialog } from '../../../../components/patient-dialog';
import { Button } from '../../../../components/ui/button';
import { formatCPF } from '../../../../lib/format-cpf';
import { formatDateAndAge } from '../../../../lib/format-date-and-age';
import { formatPhone } from '../../../../lib/format-phone';
import { mock } from '../../../../lib/mocks';
import { PatientExamHistory } from './components/patient-exam-history';

export const PatientPage = () => {
    const { id } = useParams();
    const patient = mock.patients.find((patient) => patient.id === id);

    if (!patient) {
        return <Navigate to="/painel/pacientes" replace />;
    }

    return (
        <main className="page-wrapper">
            <Headline
                title={patient.name}
                subtitle="Informações do paciente"
                children={
                    <div className="flex items-center gap-4">
                        <PatientDialog patient={patient}>
                            <Button variant="secondary">
                                <User2Icon />
                                Editar Paciente
                            </Button>
                        </PatientDialog>
                        <ExamDialog>
                            <Button>
                                <File />
                                Novo Exame
                            </Button>
                        </ExamDialog>
                    </div>
                }
            />

            <InfoContent>
                <CardInfo
                    icon={Baby}
                    label="Data de nascimento"
                    value={formatDateAndAge(patient.birthDate)}
                />

                <CardInfo
                    icon={IdCard}
                    label="CPF"
                    value={<span className="text-muted-foreground">{formatCPF(patient.cpf)}</span>}
                />

                <CardInfo
                    icon={Phone}
                    label="Telefone"
                    value={
                        <span className="text-muted-foreground">{formatPhone(patient.phone)}</span>
                    }
                />

                <CardInfo
                    icon={Calendar}
                    label="Cadastrado desde"
                    value={
                        <span className="text-muted-foreground">
                            {new Date(patient.createdAt).toLocaleDateString('pt-BR')}
                        </span>
                    }
                />
            </InfoContent>

            <PatientExamHistory exams={patient.exams} />
        </main>
    );
};
