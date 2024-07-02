import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export default function Field(props: PropsWithChildren) {
    const className = clsx('mb-[10px] flex flex-col w-full relative');

    return <div className={className}>{props.children}</div>;
}
