import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { clsx } from 'clsx';

export const Button = (
    props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
) => {
    const { className, children, onClick, ...rest } = props;
    return (
        <button
            {...rest}
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
