import { PostType } from './types';

export const ListItem = ({ item }: { item: PostType }) => {
    const { id, title, body } = item;
    return (
        <li
            className="flex gap-4 p-4 items-center rounded-md bg-gray5"
            key={id}
        >
            <div className="flex flex-col gap-4">
                <p className="text-2xl font-medium">{title}</p>
                <span>{body}</span>
            </div>
        </li>
    );
};
