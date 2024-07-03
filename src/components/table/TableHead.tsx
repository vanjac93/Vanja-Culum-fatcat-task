import { PropsWithChildren } from 'react';

export default function TableHead({ children }: PropsWithChildren) {
    return (
        <thead className="border-b-2 rounded-t-4 border-y-gray60">
            {children}
        </thead>
    );
}
