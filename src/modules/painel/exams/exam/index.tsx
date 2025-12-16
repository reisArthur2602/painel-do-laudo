import { Info } from 'lucide-react';
import { Navigate, useParams } from 'react-router';
import { Headline } from '../../../../components/headline';
import { Alert, AlertDescription, AlertTitle } from '../../../../components/ui/alert';
import { mock } from '../../../../lib/mocks';
import { ExamFiles } from './components/exam-files';
import { ExamInfo } from './components/exam-info';
import { ExamPreview } from './components/exam-preview';
import { ExamRelease } from './components/exam-release';
import { PrintAccessCode } from './components/print-access-code';

export const ExamPage = () => {
    const { id } = useParams();
    const exam = mock.exams.find((exam) => exam.id === id);
    if (!exam) return <Navigate to="/painel/exames" />;

    const canRelease = exam.attachments.length > 0;

    return (
        <main className="page-wrapper">
            <Headline
                title={exam.description}
                subtitle={'Informações do Exame'}
                children={
                    <div className="flex items-center gap-2">
                        <PrintAccessCode />

                        {canRelease && <ExamRelease examId={exam.id} canRelease={canRelease} />}
                    </div>
                }
            />
            {!canRelease && (
                <Alert className="border-amber-300 bg-amber-50 text-amber-700">
                    <Info className="h-4 w-4" />
                    <AlertTitle className="font-semibold">Ação indisponível</AlertTitle>
                    <AlertDescription>
                        Somente exames que possuem arquivos anexados podem ser liberados para
                        retirada.
                    </AlertDescription>
                </Alert>
            )}

            <section className="grid grid-cols-3 gap-6 ">
                <ExamPreview exam={exam} />
                <div className="flex flex-col gap-4 ">
                    <ExamInfo exam={exam} />
                    <ExamFiles attachments={exam.attachments} examId={exam.id} />
                </div>
            </section>
        </main>
    );
};
