import { PropsWithChildren } from 'react';

export default function TableBodyCell({ children }: PropsWithChildren) {
    return <td className="p-2">{children}</td>;
}
