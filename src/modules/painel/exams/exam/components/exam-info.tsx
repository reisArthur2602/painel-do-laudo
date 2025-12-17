import { Activity, Baby, Calendar, File, Hash, User } from 'lucide-react';
import { ExamDialog } from '../../../../../components/exam-dialog';
import { CardInfo } from '../../../../../components/info';
import { Button } from '../../../../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../../../../components/ui/card';
import { formatDateAndAge } from '../../../../../lib/format-date-and-age';
import { translateStatus } from '../../../../../lib/translate-status';

interface IExamInfo {
    exam: Exam;
}

export const ExamInfo = ({ exam }: IExamInfo) => {
    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <span className="leading-none font-semibold">Detalhes</span>
                <ExamDialog exam={exam}>
                    <Button>
                        <File /> Editar Exame
                    </Button>
                </ExamDialog>
            </CardHeader>

            <CardContent>
                <ul className="flex flex-col gap-2">
                    <CardInfo
                        padding={2}
                        border={false}
                        icon={Hash}
                        label="Registro"
                        value={<span className="text-muted-foreground">{`#${exam.registry}`}</span>}
                    />
                    <CardInfo
                        padding={2}
                        border={false}
                        icon={Activity}
                        label="Status"
                        value={
                            <span className="text-muted-foreground">
                                {translateStatus(exam.status)}
                            </span>
                        }
                    />
                    <CardInfo
                        padding={2}
                        border={false}
                        icon={User}
                        label="Paciente"
                        value={<span className="text-muted-foreground">{exam.patient.name}</span>}
                    />

                    <CardInfo
                        padding={2}
                        border={false}
                        icon={Baby}
                        label="Data de nascimento"
                        value={
                            <span className="text-muted-foreground">
                                {formatDateAndAge(exam.patient.birthDate)}
                            </span>
                        }
                    />

                    <CardInfo
                        padding={2}
                        border={false}
                        icon={User}
                        label="Responsável"
                        value={<span className="text-muted-foreground">{exam.performedBy}</span>}
                    />

                    <CardInfo
                        padding={2}
                        border={false}
                        icon={Calendar}
                        label="Data de realização"
                        value={
                            <span className="text-muted-foreground">
                                {new Date(exam.createdAt).toLocaleDateString('pt-BR')}
                            </span>
                        }
                    />

                    {exam.notes && (
                        <div className="flex flex-col gap-2 font-medium text-foreground text-sm mt-4">
                            <span className="leading-none font-semibold">Relatório</span>
                            <div className="bg-primary/20 p-3 rounded-lg border text-xs text-primary">
                                {exam.notes}
                            </div>
                        </div>
                    )}
                </ul>
            </CardContent>
        </Card>
    );
};
