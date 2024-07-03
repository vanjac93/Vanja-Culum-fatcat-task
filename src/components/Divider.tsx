import { clsx } from 'clsx';

export type DividerProps = {
    vertical?: true;
    color?: string;
};

export const Divider = ({ vertical, color }: DividerProps) => {
    return (
        <span
            className={clsx(
                'block',
                color || 'bg-primary',
                vertical
                    ? ['h-full', 'w-[1px]', 'mx-8']
                    : ['h-[1px]', 'w-full', 'my-8']
            )}
        />
    );
};
