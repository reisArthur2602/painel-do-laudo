import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface IInfoSectionContent {
    children: ReactNode;
    cols?: number;
}
const InfoContent = ({ children, cols = 4 }: IInfoSectionContent) => {
    return <ul className={cn(`grid gap-4 grid-cols-2 lg:grid-cols-${cols}`)}>{children}</ul>;
};

interface ICardInfo {
    icon: LucideIcon;
    label: string;
    description?: string;
    value?: ReactNode;
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
    description,
    border = true,
}: ICardInfo) => {
    return (
        <li
            className={cn(
                `flex items-start gap-4 rounded-xl ${
                    border ? 'border' : 'border-none'
                } bg-card p-${padding}`
            )}
        >
            <div className="rounded-lg bg-primary/20 p-2 text-primary">
                <Icon className={cn(size === 'sm' ? 'size-4' : 'size-5')} />
            </div>

            <div className={cn(`flex flex-col  ${size === 'sm' ? 'text-xs' : 'text-sm'} gap-2`)}>
                <div className="flex flex-col">
                    <span className="font-medium text-foreground ">{label}</span>
                    {description && (
                        <span className="text-muted-foreground text-xs">{description}</span>
                    )}
                </div>
                {value}
            </div>
        </li>
    );
};

export { CardInfo, InfoContent };
