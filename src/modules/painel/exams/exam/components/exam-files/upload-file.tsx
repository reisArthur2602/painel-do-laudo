import { Loader2, UploadCloudIcon } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '../../../../../../components/ui/button';

interface IUploadAttachments {
    examId: string;
}

export const UploadFile = ({ examId }: IUploadAttachments) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const uploading = false;

    return (
        <div className="flex justify-end">
            <input ref={inputRef} type="file" accept="application/pdf" className="hidden" />

            <Button onClick={() => inputRef.current?.click()} disabled={uploading}>
                {uploading ? (
                    <>
                        <Loader2 className="size animate-spin " />
                        Enviando...
                    </>
                ) : (
                    <>
                        <UploadCloudIcon />
                        Adicionar arquivo
                    </>
                )}
            </Button>
        </div>
    );
};
