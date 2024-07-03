import { clsx } from 'clsx';

import { PostType } from './types';

export const ListItem = ({ item }: { item: PostType }) => {
    const { id, title, body } = item;
    return (
        <li
            className={clsx(
                'flex',
                'gap-4',
                'p-4',
                'items-center',
                'rounded-md',
                'bg-gray5'
            )}
            key={id}
        >
            <div className={clsx('flex', 'flex-col', 'gap-4')}>
                <p className={clsx('text-2xl', 'font-medium')}>{title}</p>
                <span>{body}</span>
            </div>
        </li>
    );
};
