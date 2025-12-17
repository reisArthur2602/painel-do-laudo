import { useNavigate } from 'react-router';
import { Tabs, TabsList, TabsTrigger } from '../../../../components/ui/tabs';

interface ITabsExams {
    search: ExamStatus;
}

export const TabsExams = ({ search = 'Pending' }: ITabsExams) => {
    const navigate = useNavigate();

    return (
        <Tabs value={search} >
            <TabsList className="w-full">
                <TabsTrigger
                    value="Pending"
                    onClick={() => navigate({ search: '?status=Pending' })}
                >
                    Pendentes
                </TabsTrigger>
                <TabsTrigger
                    value="AwaitingPickup"
                    onClick={() => navigate({ search: '?status=AwaitingPickup' })}
                >
                    Aguardando Retirada
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
};
