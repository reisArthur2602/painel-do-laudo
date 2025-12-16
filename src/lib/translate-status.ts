export const translateStatus = (status: ExamStatus) => {
    const map: Record<ExamStatus, string> = {
        Pending: 'Pendente',
        Ready: 'Pronto',
        AwaitingPickup: 'Aguardando retirada',
        Delivered: 'Entregue',
    };

    return map[status];
};
