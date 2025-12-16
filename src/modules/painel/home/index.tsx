import { ClipboardList, Clock, FileCheck, Users } from 'lucide-react';
import { Headline } from '../../../components/headline';
import { CardInfo, InfoContent } from '../../../components/info';
import { mock } from '../../../lib/mocks';
import { SystemLogs } from './components/system-logs';

export const PainelPage = () => {
    return (
        <main className="page-wrapper">
            <Headline title="Painel" subtitle="Visão geral" />

            <InfoContent cols={4}>
                <CardInfo label="Exames aguardando retirada" value="128" icon={ClipboardList} />
                <CardInfo label="Exames pendentes" value="12" icon={Clock} />
                <CardInfo label="Total de pacientes" value="54" icon={Users} />
                <CardInfo label="Laudos entregues" value="96" icon={FileCheck} />
            </InfoContent>

            <section className="grid grid-cols-1 lg:grid-cols-2">
                <div>Aguardando Retirada</div>
                <SystemLogs logs={mock.logs.slice(0, 4)} />
            </section>
        </main>
    );
};
