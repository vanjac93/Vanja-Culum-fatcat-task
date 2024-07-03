import { PropsWithChildren } from 'react';

import { clsx } from 'clsx';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export const Button = ({
    children,
    onClick,
    className,
}: PropsWithChildren<ButtonProps>) => {
    return (
        <button
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
