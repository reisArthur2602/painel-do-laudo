type UserRole = 'Admin' | 'Member';

type SystemEvent =
    | 'PatientCreated'
    | 'PatientRemoved'
    | 'ExamCreated'
    | 'ExamReady'
    | 'ExamPickup'
    | 'ExamDelivered'
    | 'ExamRemoved';

type ExamStatus = 'Pending' | 'Ready' | 'AwaitingPickup' | 'Delivered';
type ExamType = 'External' | 'Dicom';

type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    logs: Array<Log>;
};

type Log = {
    id: string;
    event: SystemEvent;
    message: string;
    createdAt: string;
    user: User;
};

type Patient = {
    id: string;
    name: string;
    cpf: string;
    phone: string;
    birthDate: string;
    createdAt: string;
    exams: Array<Exam>;
};

type Exam = {
    id: string;
    status: ExamStatus;
    type: ExamType;
    registry: number;
    description: string;
    orthanc_study_id?: string;
    performedBy: string;
    createdAt: string;
    notes?: string;
    patientId: string;
    patient: Patient;
    attachments: Array<Attachment>;
};

type Attachment = {
    id: string;
    examId: string;
    filename: string;
    path: string;
    size: number;
    url: string;
    createdAt: string;
    exam: Exam;
};

type NotificationType = 'ExamCreated' | 'ExamAwaitingPickup';

type NotificationSocket = {
    id: string;
    type: NotificationType;
    examId: string;
    createdAt: string;
};
