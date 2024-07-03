import { PropsWithChildren } from 'react';

export default function TableRow({ children }: PropsWithChildren) {
    return <tr className="active:bg-primary active:text-white">{children}</tr>;
}
