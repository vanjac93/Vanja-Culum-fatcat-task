import { PropsWithChildren } from 'react';

import clsx from 'clsx';

export const Layout = ({
    children,
    background,
}: PropsWithChildren<{ background: string }>) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
