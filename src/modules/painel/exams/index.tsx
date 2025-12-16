import { Headline } from '../../../components/headline';
import { mock } from '../../../lib/mocks';
import { ExamsData } from './components/exams-data';

export const ExamsPage = () => {
    return (
        <main className="page-wrapper">
            <Headline title="Exames" subtitle="Informações dos exames" />
            <ExamsData exams={mock.exams} />
        </main>
    );
};
