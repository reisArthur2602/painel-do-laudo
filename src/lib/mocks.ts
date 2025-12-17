import { v4 as uuid } from 'uuid';

const rand = <T>(list: Array<T>): T => list[Math.floor(Math.random() * list.length)];

const randomDate = (days = 60): string =>
    new Date(Date.now() - Math.random() * days * 24 * 60 * 60 * 1000).toISOString();

const randomCPF = (): string => String(Math.floor(10000000000 + Math.random() * 89999999999));

const randomPhone = (): string => `11${Math.floor(900000000 + Math.random() * 99999999)}`;

const examDescriptions: Array<string> = [
    'Raio-X de Tórax PA',
    'Tomografia Computadorizada de Crânio',
    'Ressonância Magnética da Coluna Lombar',
    'Ultrassom Abdominal',
    'Ecodoppler de Carótidas',
    'Mamografia Bilateral',
    'Raio-X de Mão - Frente',
    'Tomografia de Tórax',
    'Ressonância Magnética do Joelho',
    'Ultrassom Obstétrico',
];

const professionals: Array<string> = [
    'Dr. João Silva - CRM 12345',
    'Dra. Marina Couto - CRM 99887',
    'Dr. Pedro Reis - CRM 55678',
    'Téc. Radiologia Ana Ramos',
    'Téc. Radiologia Marcos Prado',
];

const patientNames: Array<string> = [
    'Maria Clara Rodrigues',
    'João Pedro Almeida',
    'Fernanda Souza',
    'Ricardo Matias',
    'Beatriz Castro',
    'Luiza Moraes',
    'Felipe Cardoso',
    'Mariana Torres',
    'Gabriel Azevedo',
    'Carolina Batista',
    'Pedro Henrique Gomes',
    'Larissa Martins',
];

// Event messages ---------------------------------------------------------
const eventMessages: Record<SystemEvent, string> = {
    PatientCreated: 'Novo paciente registrado no sistema.',
    PatientRemoved: 'Paciente removido do sistema.',
    ExamCreated: 'Novo exame criado e vinculado ao paciente.',
    ExamReady: 'Exame finalizado e pronto para retirada.',
    ExamPickup: 'Exame retirado pelo paciente.',
    ExamDelivered: 'Laudo entregue ao paciente.',
    ExamRemoved: 'Exame removido do registro.',
};

// USERS ------------------------------------------------------------------
export const users: Array<User> = Array.from({ length: 20 }).map((_, i) => ({
    id: uuid(),
    name: `Usuário  ${i + 1}`,
    email: `user${i + 1}@master.com`,
    password: 'master@12345',
    role: rand(['Admin', 'Member']),
    logs: [],
    createdAt: String(new Date()),
}));

// PATIENTS ---------------------------------------------------------------
export const patients: Array<Patient> = Array.from({ length: 200 }).map(() => {
    const name = rand(patientNames);

    return {
        id: uuid(),
        name,
        cpf: randomCPF(),
        phone: randomPhone(),
        birthDate: randomDate(12000),
        createdAt: randomDate(200),
        exams: [],
    };
});

// EXAMS -----------------------------------------------------------------
export const exams: Array<Exam> = Array.from({ length: 200 }).map(() => {
    const patient = rand(patients);

    return {
        id: uuid(),
        status: rand(['Pending', 'Ready', 'AwaitingPickup', 'Delivered']),
        type: rand(['External', 'Dicom']),
        registry: Math.floor(10000 + Math.random() * 90000),
        description: rand(examDescriptions),
        orthanc_study_id: Math.random() > 0.5 ? uuid() : undefined,
        performedBy: rand(professionals),
        createdAt: randomDate(45),
        notes:
            Math.random() > 0.4
                ? 'Exame realizado com técnica adequada. Não há alterações significativas observadas.'
                : undefined,
        patientId: patient.id,
        patient,
        attachments: [],
    };
});

// Attach exams to patients
patients.forEach((p) => {
    p.exams = exams.filter((e) => e.patientId === p.id);
});

// ATTACHMENTS -----------------------------------------------------------
export const attachments: Array<Attachment> = exams.flatMap((exam) =>
    Array.from({ length: 1 + Math.floor(Math.random() * 3) }).map(() => {
        const id = uuid();

        return {
            id: id,
            examId: exam.id,
            filename: `laudo-${exam.registry}-${id}.pdf`,
            path: `/files/laudos/${id}.pdf`,
            size: Math.floor(100_000 + Math.random() * 400_000),
            url: `https://mockstorage.com/laudos/${id}.pdf`,
            createdAt: randomDate(20),
            exam,
        };
    })
);

// Attach attachments to exams
exams.forEach((exam) => {
    exam.attachments = attachments.filter((a) => a.examId === exam.id);
});

// LOGS -----------------------------------------------------------------
export const logs: Array<Log> = Array.from({ length: 50 }).map(() => {
    const user = rand(users);
    const event = rand([
        'PatientCreated',
        'PatientRemoved',
        'ExamCreated',
        'ExamReady',
        'ExamPickup',
        'ExamDelivered',
        'ExamRemoved',
    ]) as SystemEvent;

    return {
        id: uuid(),
        event,
        message: eventMessages[event],
        createdAt: randomDate(15),
        user,
    };
});

users.forEach((u) => {
    u.logs = logs.filter((l) => l.user.id === u.id);
});

const notifications: NotificationSocket[] = [
    {
        id: 'notif-001',
        type: 'ExamCreated',
        examId: 'exam-001',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'notif-002',
        type: 'ExamAwaitingPickup',
        examId: 'exam-002',
        createdAt: new Date(
            Date.now() - 1000 * 60 * 10 // 10 minutos atrás
        ).toISOString(),
    },
];

export const mock = {
    users,
    patients,
    exams,
    attachments,
    logs,
    notifications,
};
