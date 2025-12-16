import { Badge } from '../components/ui/badge';
import { translateStatus } from './translate-status';

interface IGetBadgeExamStatus {
    status: ExamStatus;
}

export const getBadgeExamStatus = ({ status }: IGetBadgeExamStatus) => {
    const label = translateStatus(status);

    switch (status) {
        case 'Pending':
            return (
                <Badge
                    variant="outline"
                    className="border-yellow-400 text-yellow-600 dark:border-yellow-500 dark:text-yellow-400"
                >
                    {label}
                </Badge>
            );

        case 'Ready':
            return (
                <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                    {label}
                </Badge>
            );

        case 'AwaitingPickup':
            return (
                <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                >
                    {label}
                </Badge>
            );

        case 'Delivered':
            return <Badge className="bg-green-600 text-white dark:bg-green-500">{label}</Badge>;

        default:
            return <Badge>{label}</Badge>;
    }
};
