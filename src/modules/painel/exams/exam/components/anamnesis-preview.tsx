import { Download } from 'lucide-react'
import { Button } from '../../../../../components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
} from '../../../../../components/ui/card'
import { formatDateAndAge } from '../../../../../lib/format-date-and-age'

interface IAnamnesisPreview {
  exam: Exam
}

interface IRowInfo {
  label: string
  value: string
}

const RowInfo = ({ label, value }: IRowInfo) => {
  return (
    <div className="flex gap-1.5 text-sm">
      <span className="font-medium text-foreground">
        {label}
      </span>
      <span className="text-muted-foreground">
        {value}
      </span>
    </div>
  )
}

export const AnamnesisPreview = ({
  exam,
}: IAnamnesisPreview) => {
  return (
    <Card className="col-span-2 p-0">
      <CardHeader className="flex items-center justify-between pt-6">
        <span className="font-medium">
          Ficha de Anamnese
        </span>

        <div className="flex gap-1">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-yellow-400" />
          <span className="size-3 rounded-full bg-green-400" />
        </div>
      </CardHeader>

      <CardContent className="flex justify-center bg-muted/40 p-8">
        <div className="relative group">
          {/* OVERLAY DOWNLOAD */}
          <div
            className="
              pointer-events-none absolute inset-0 z-10
              flex items-center justify-center
              opacity-0 transition-opacity duration-300
              group-hover:opacity-100
            "
          >
            <Button
              size="lg"
              className="pointer-events-auto flex items-center gap-2"
              onClick={() => {
                console.log('download anamnese')
              }}
            >
              <Download className="size-4" />
              Baixar Anamnese
            </Button>
          </div>

          {/* PAPEL A4 */}
          <div
            className="
              bg-white border shadow-sm
              w-[210mm] h-[297mm]
              p-[20mm]
              flex flex-col gap-6
              text-sm transition duration-200
              group-hover:blur-sm
            "
          >
            {/* CABEÇALHO */}
            <div className="border-b pb-4 flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-foreground">
                Anamnese – {exam.description}
              </h3>

              <RowInfo
                label="Registro:"
                value={`#${exam.registry}`}
              />
              <RowInfo
                label="Data do exame:"
                value={new Date(
                  exam.createdAt
                ).toLocaleDateString('pt-BR')}
              />
            </div>

            {/* IDENTIFICAÇÃO */}
            <section className="flex flex-col gap-1">
              <h4 className="font-medium text-foreground">
                Identificação do Paciente
              </h4>
              <RowInfo
                label="Paciente:"
                value={exam.patient.name}
              />
              <RowInfo
                label="Data de nascimento:"
                value={formatDateAndAge(
                  exam.patient.birthDate
                )}
              />
            </section>

            {/* CONTEXTO / QUEIXA */}
            <section className="flex flex-col gap-2 pt-2">
              <h4 className="font-medium text-foreground">
                Queixa / Relato Clínico
              </h4>

              <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                {exam.notes ||
                  'Nenhuma observação clínica registrada.'}
              </p>
            </section>

            {/* CONTEXTO DO EXAME */}
            <section className="flex flex-col gap-2 pt-2">
              <h4 className="font-medium text-foreground">
                Contexto do Exame
              </h4>

              <p className="text-muted-foreground">
                Exame do tipo <strong>{exam.type}</strong>,
                registrado sob o número{' '}
                <strong>#{exam.registry}</strong>.
              </p>
            </section>

            {/* RODAPÉ */}
            <div className="mt-auto border-t pt-4">
              <p className="font-medium text-foreground">
                {exam.performedBy}
              </p>
              <p className="text-xs text-muted-foreground">
                Profissional responsável
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
