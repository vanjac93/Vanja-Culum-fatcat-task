import { PropsWithChildren } from 'react';

import { clsx } from 'clsx';

interface ExampleContainerProps {
    header: string;
    text: string;
}

export const ExampleContainer = (
    props: PropsWithChildren<ExampleContainerProps>
) => {
    const { header, text, children } = props;
    return (
        <section
            className={clsx(
                'flex',
                'flex-col',
                'gap-4',
                'p-4',
                'bg-white',
                'rounded-2xl'
            )}
        >
            <h2
                className={clsx(
                    'text-black',
                    'text-2xl',
                    'leading-normal',
                    'font-medium'
                )}
            >
                {header}
            </h2>
            <p>{text}</p>
            {children}
        </section>
    );
};
