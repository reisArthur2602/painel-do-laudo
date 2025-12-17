import { mock } from '../lib/mocks';
interface IUseExams {
    status: ExamStatus
}

export const useExams = ({ status }: IUseExams) => {
    const exams = mock.exams.filter((exam) => exam.status === status);
    const loading = false;
    return { exams, loading };
};
