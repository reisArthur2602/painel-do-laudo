import { FileHeartIcon } from 'lucide-react';
import { Link } from 'react-router';

export const Logo = () => {
    return (
        <Link
            to="/painel"
            className="text-primary flex items-center gap-1 font-semibold tracking-tighter hover:text-primary/70 hover:scale-110 transition-all duration-100"
        >
            <FileHeartIcon className="size-4" />
            Portal Master
        </Link>
    );
};
