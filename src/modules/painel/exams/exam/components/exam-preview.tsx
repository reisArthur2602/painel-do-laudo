import { Download } from 'lucide-react';
import { Button } from '../../../../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../../../../components/ui/card';
import { formatDateAndAge } from '../../../../../lib/format-date-and-age';

interface IExamPreview {
    exam: Exam;
}

interface IRowInfo {
    label: string;
    value: string;
}

const RowInfo = ({ label, value }: IRowInfo) => {
    return (
        <div className="flex gap-1.5 text-sm">
            <span className="font-medium text-foreground">{label}</span>
            <span className="text-muted-foreground">{value}</span>
        </div>
    );
};

export function ExamPreview({ exam }: IExamPreview) {
    return (
        <Card className="col-span-2 p-0">
            <CardHeader className="flex items-center justify-between pt-6">
                <span className="font-medium">Resumo do exame</span>

                <div className="flex gap-1">
                    <span className="size-3 rounded-full bg-red-400" />
                    <span className="size-3 rounded-full bg-yellow-400" />
                    <span className="size-3 rounded-full bg-green-400" />
                </div>
            </CardHeader>

            <CardContent className="flex justify-center bg-muted/40 p-8">
                <div className="relative group">
                    <div
                        className="
                        cursor-pointer
              pointer-events-none
              absolute inset-0 z-10
              flex items-center justify-center
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
                    >
                        <Button
                            size="lg"
                            className="pointer-events-auto flex items-center gap-2"
                            onClick={() => {
                                console.log('download exame');
                            }}
                        >
                            <Download className="size-4" />
                            Baixar Resumo
                        </Button>
                    </div>

                    {/* PAPEL A4 */}
                    <div
                        className="
              bg-white border shadow-sm
              w-[210mm] h-[297mm]
              p-[20mm]
              flex flex-col gap-4
              text-sm
              transition
              duration-200
              group-hover:blur-sm
            "
                    >
                        {/* Cabeçalho */}
                        <div className="flex flex-col gap-1 border-b pb-4">
                            <h4 className="text-base font-semibold text-foreground">
                                {exam.description}
                            </h4>

                            <RowInfo label="Registro:" value={`#${exam.registry}`} />
                            <RowInfo
                                label="Data de realização:"
                                value={new Date(exam.createdAt).toLocaleDateString('pt-BR')}
                            />
                        </div>

                        {/* Dados do paciente */}
                        <div className="flex flex-col gap-1 pt-2">
                            <RowInfo label="Paciente:" value={exam.patient.name} />
                            <RowInfo
                                label="Data de nascimento:"
                                value={formatDateAndAge(exam.patient.birthDate)}
                            />
                        </div>

                        {exam.notes && (
                            <div className="flex flex-col gap-2 pt-4">
                                <span className="font-medium text-foreground">Relatório</span>
                                <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                                    {exam.notes}
                                </p>
                            </div>
                        )}

                        {/* Rodapé */}
                        <div className="mt-auto border-t pt-4">
                            <p className="font-medium text-foreground">{exam.performedBy}</p>
                            <p className="text-xs text-muted-foreground">
                                Profissional responsável
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
