import { clsx } from 'clsx';

import { useListItems } from './useListItems';

export const List = () => {
    const { data, error, isLoading } = useListItems();

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return (
            <>
                <span>Something went wrong.</span>
                {error.message && <span>{error.message}</span>}
            </>
        );
    }

    return (
        <div
            className={clsx(
                'flex',
                'w-full',
                'flex-col',
                'gap-4',
                'p-4',
                'bg-white',
                'py-6',
                'px-4',
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
                {' '}
                List Example
            </h2>
            <ul className="text-gray80 flex flex-col gap-8">
                {data?.map(({ id, body, title, userId }) => (
                    <li className="flex gap-8" key={id}>
                        <span>{id}</span>
                        <span>{userId}</span>
                        <span>{body}</span>
                        <span>{title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
