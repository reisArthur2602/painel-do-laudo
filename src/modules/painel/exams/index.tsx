import { useSearchParams } from 'react-router';
import { Headline } from '../../../components/headline';
import { Skeleton } from '../../../components/ui/skeleton';
import { useExams } from '../../../hooks/use-exams';
import { ExamsData } from './components/exams-data';
import { TabsExams } from './components/tabs-exams';

const ExamsLoading = () => {
    return <Skeleton />;
};

export const ExamsPage = () => {
    const [searchParams] = useSearchParams();
    const status: ExamStatus = (searchParams.get('status') as ExamStatus) || 'Pending';

    const { exams, loading } = useExams({ status });

    if (loading) return <ExamsLoading />;

    return (
        <main className="page-wrapper">
            <Headline title="Exames" subtitle="Informações dos exames" />
            <TabsExams search={status} />
            <ExamsData exams={exams} />
        </main>
    );
};
