import { CheckCircle, ClipboardList, Package, Trash2, UserMinus, UserPlus } from 'lucide-react';

export const getEventIcon = (event: SystemEvent) => {
    const map = {
        PatientCreated: UserPlus,
        PatientRemoved: UserMinus,
        ExamCreated: ClipboardList,
        ExamReady: CheckCircle,
        ExamPickup: Package,
        ExamDelivered: CheckCircle,
        ExamRemoved: Trash2,
    } satisfies Record<SystemEvent, any>;

    return map[event];
};
