import { PropsWithChildren } from 'react';

import { clsx } from 'clsx';

interface LayoutBaseProps {
    background: string;
}

export type LayoutSectionProps = PropsWithChildren<LayoutBaseProps>;

export const Layout = ({ children, background }: LayoutSectionProps) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
