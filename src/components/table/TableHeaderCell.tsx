import { PropsWithChildren } from 'react';

export default function TableHeaderCell({ children }: PropsWithChildren) {
    return <td className="p-2 font-semibold">{children}</td>;
}
