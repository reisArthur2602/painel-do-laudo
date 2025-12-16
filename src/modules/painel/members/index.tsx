import { User2 } from 'lucide-react';
import { Headline } from '../../../components/headline';
import { Button } from '../../../components/ui/button';
import { mock } from '../../../lib/mocks';
import { MembersData } from './components/members-data';
import { MembersDialog } from './components/members-dialog';

export const UsersPage = () => {
    return (
        <main className="page-wrapper">
            <Headline
                title="Membros"
                subtitle="Informações dos membros"
                children={
                    <MembersDialog>
                        <Button>
                            <User2 />
                            Adicionar Membro
                        </Button>
                    </MembersDialog>
                }
            />
            <MembersData members={mock.users} />
        </main>
    );
};
