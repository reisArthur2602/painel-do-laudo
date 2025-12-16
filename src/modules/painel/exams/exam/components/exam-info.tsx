import { Activity, Baby, Calendar, Hash, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../../components/ui/card';
import { formatDateAndAge } from '../../../../../lib/format-date-and-age';
import { translateStatus } from '../../../../../lib/translate-status';

interface IRowInfo {
    icon: React.ElementType;
    label: string;
    value: string;
}

const RowInfo = ({ icon: Icon, label, value }: IRowInfo) => {
    return (
        <li className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/20 p-2 text-primary">
                <Icon className="size-5" />
            </div>

            <div className="flex flex-col text-sm">
                <span className="font-medium">{label}</span>
                <span className="text-muted-foreground">{value}</span>
            </div>
        </li>
    );
};

interface IExamInfo {
    exam: Exam;
}

export const ExamInfo = ({ exam }: IExamInfo) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Detalhes do Exame</CardTitle>
            </CardHeader>

            <CardContent>
                <ul className="flex flex-col gap-4">
                    <RowInfo icon={Hash} label="Registro" value={`#${exam.registry}`} />

                    <RowInfo icon={Activity} label="Status" value={translateStatus(exam.status)} />

                    <RowInfo icon={User} label="Paciente" value={exam.patient.name} />

                    <RowInfo
                        icon={Baby}
                        label="Data de nascimento"
                        value={formatDateAndAge(exam.patient.birthDate)}
                    />

                    <RowInfo icon={User} label="Responsável" value={exam.performedBy} />

                    <RowInfo
                        icon={Calendar}
                        label="Data de realização"
                        value={new Date(exam.createdAt).toLocaleDateString('pt-BR')}
                    />

                    {exam.notes && (
                        <div className="flex flex-col gap-2 font-medium text-foreground text-sm">
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
