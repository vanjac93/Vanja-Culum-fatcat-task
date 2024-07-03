import { PropsWithChildren } from 'react';

import { clsx } from 'clsx';

export const Field = (props: PropsWithChildren) => {
    const className = clsx('mb-[10px] flex flex-col w-full relative');

    return <div className={className}>{props.children}</div>;
};
