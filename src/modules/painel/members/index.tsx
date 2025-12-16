import { User2 } from 'lucide-react';
import { Headline } from '../../../components/headline';
import { Button } from '../../../components/ui/button';
import { mock } from '../../../lib/mocks';
import { MembersData } from './components/members-data';

export const UsersPage = () => {
    return (
        <main className="page-wrapper">
            <Headline
                title="Membros"
                subtitle="Informações dos membros"
                children={
                    <Button>
                        <User2 />
                        Adicionar Membro
                    </Button>
                }
            />
            <MembersData members={mock.users} />
        </main>
    );
};
