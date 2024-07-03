import { clsx } from 'clsx';

import { ListItem } from './ListItem';
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
            <ul className="text-gray80 flex flex-col gap-4">
                {data?.map((post) => <ListItem item={post} key={post.id} />)}
            </ul>
        </div>
    );
};
