import { PropsWithChildren } from 'react';

export default function Table({ children }: PropsWithChildren) {
    return (
        <table className="text-black border-collapse w-full">{children}</table>
    );
}
