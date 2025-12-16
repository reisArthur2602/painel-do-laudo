import { Calendar, ClipboardList } from 'lucide-react';
import { Link } from 'react-router';
import { CardInfo } from '../../../../../components/info';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../../../../components/ui/card';
import { getBadgeExamStatus } from '../../../../../lib/get-badge-exam-status';

interface IPatientExamHistory {
    exams: Exam[];
}

export const PatientExamHistory = ({ exams }: IPatientExamHistory) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Histórico de exames</CardTitle>
                <CardDescription>Total de Exames: {exams.length}</CardDescription>
            </CardHeader>

            <CardContent>
                {exams.length === 0 ? (
                    <div className="rounded-lg border border-dashed p-6 text-center">
                        <p>Nenhum exame registrado para este paciente.</p>
                    </div>
                ) : (
                    <ul className="flex flex-col gap-2">
                        {exams.map((exam) => (
                            <Link to={`/painel/exames/${exam.id}`} key={exam.id}>
                                <CardInfo
                                    label={exam.description}
                                    icon={ClipboardList}
                                    value={
                                        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground items-center">
                                            <span>#{exam.registry}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="size-4" />
                                                {new Date(exam.createdAt).toLocaleDateString(
                                                    'pt-BR'
                                                )}
                                            </span>
                                            <span>•</span>
                                            {getBadgeExamStatus({ status: exam.status })}
                                        </div>
                                    }
                                />
                            </Link>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
    );
};
