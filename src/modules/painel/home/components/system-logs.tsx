import { Clock } from 'lucide-react';
import { CardInfo } from '../../../../components/info';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card';
import { getEventIcon } from '../../../../lib/get-event-icon';

interface ISystemLogs {
    logs: Log[];
}

export const SystemLogs = ({ logs }: ISystemLogs) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Atividades recentes</CardTitle>
            </CardHeader>

            <CardContent>
                {logs.length === 0 ? (
                    <div className="rounded-lg border border-dashed p-6 text-center">
                        <p className="text-sm text-muted-foreground">
                            Nenhuma atividade registrada.
                        </p>
                    </div>
                ) : (
                    <ul className="flex flex-col gap-2">
                        {logs.map((log) => {
                            const icon = getEventIcon(log.event);

                            return (
                                <CardInfo
                                    icon={icon}
                                    label={log.message}
                                    value={
                                        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                                            <span>{log.user.name}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="size-3" />
                                                {new Date(log.createdAt).toLocaleString('pt-BR')}
                                            </span>
                                        </div>
                                    }
                                />
                            );
                        })}
                    </ul>
                )}
            </CardContent>
        </Card>
    );
};
