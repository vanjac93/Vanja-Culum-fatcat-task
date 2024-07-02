import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface LayoutBaseProps {
    background: string;
}

export type LayoutSectionProps = PropsWithChildren<LayoutBaseProps>;

export const Layout = ({ children, background }: LayoutSectionProps) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
