import { User2 } from 'lucide-react';
import { Headline } from '../../../components/headline';
import { PatientDialog } from '../../../components/patient-dialog';
import { Button } from '../../../components/ui/button';
import { mock } from '../../../lib/mocks';
import { PatientsData } from './components/patients-data';

export const PatientsPage = () => {
    return (
        <main className="page-wrapper">
            <Headline
                title="Pacientes"
                subtitle="Informações dos pacientes"
                children={
                    <PatientDialog>
                        <Button>
                            <User2 />
                            Adicionar Paciente
                        </Button>
                    </PatientDialog>
                }
            />
            <PatientsData patients={mock.patients} />
        </main>
    );
};
