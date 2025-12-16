import type { ReactNode } from 'react';

interface IHeadline {
    children?: ReactNode;
    title: string;
    subtitle?: string;
}
export const Headline = ({ children, title, subtitle }: IHeadline) => {
    return (
        <div className="flex items-center gap-4 justify-between">
            <div className="flex flex-col">
                <h1 className="truncate">{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
            {children}
        </div>
    );
};
