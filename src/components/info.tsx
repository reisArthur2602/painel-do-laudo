import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface IInfoSectionContent {
    children: ReactNode;
    cols?: number;
}
const InfoContent = ({ children, cols = 4 }: IInfoSectionContent) => {
    return (
        <section className={cn(`grid gap-4 grid-cols-4 xl:grid-cols-${String(cols)}`)}>{children}</section>
    );
};

interface ICardInfo {
    icon: LucideIcon;
    label: string;

    value: ReactNode;
    padding?: number;
    size?: 'sm' | 'lg';
    border?: boolean;
}

const CardInfo = ({
    icon: Icon,
    label,
    value,
    padding = 4,
    size = 'lg',

    border = true,
}: ICardInfo) => {
    return (
        <div
            className={cn(
                `flex items-center gap-4 rounded-xl ${
                    border ? 'border' : 'border-none'
                } bg-card p-${padding}`
            )}
        >
            <div className="rounded-lg bg-primary/20 p-2 text-primary">
                <Icon className={cn(size === 'sm' ? 'size-4' : 'size-5')} />
            </div>

            <div className={cn(`flex flex-col  ${size === 'sm' ? 'text-xs' : 'text-sm'} gap-1`)}>
                <span className="font-semibold text-foreground">{label}</span>

                {value}
            </div>
        </div>
    );
};

export { CardInfo, InfoContent };
