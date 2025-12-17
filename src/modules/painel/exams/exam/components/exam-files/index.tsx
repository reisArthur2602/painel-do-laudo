import { Download, FileCheck } from 'lucide-react';
import { Button } from '../../../../../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../../../../../components/ui/card';

import { DeleteFile } from './delete-file';
import { UploadFile } from './upload-file';

interface IExamFiles {
    examId: string;
    attachments: Attachment[];
}

export const ExamFiles = ({ attachments, examId }: IExamFiles) => {
    const handleDownload = (file: Attachment) => {
        // aqui entra o download real
        console.log('download:', file);
    };

    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <span className="leading-none font-semibold">Arquivos</span>
                <UploadFile examId={examId} />
            </CardHeader>

            <CardContent>
                {attachments.length === 0 ? (
                    <div className="rounded-lg border border-dashed p-6 text-center">
                        <p>Nenhum arquivo anexado a este exame.</p>
                    </div>
                ) : (
                    <ul className="flex flex-col gap-3 bg-muted/10">
                        {attachments.map((attachment) => (
                            <li
                                key={attachment.id}
                                className="group flex items-center justify-between rounded-lg border p-4 transition hover:bg-muted/40"
                            >
                                {/* LEFT */}
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="rounded-lg border p-2 bg-primary/10">
                                        <FileCheck className="size-4 text-primary" />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-medium">
                                            {attachment.filename}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {(attachment.size / 1024).toFixed(1)} KB •{' '}
                                            {new Date(attachment.createdAt).toLocaleDateString(
                                                'pt-BR'
                                            )}
                                        </p>
                                    </div>
                                </div>

                                {/* ACTIONS */}
                                <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        onClick={() => handleDownload(attachment)}
                                    >
                                        <Download className="size-4" />
                                    </Button>

                                    <DeleteFile attachmentId={attachment.id} />
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
    );
};
