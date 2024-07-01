import { useListItems } from './useListItems';

export function List() {
    const { data, error, isLoading } = useListItems();

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return <span>Something went wrong.</span>;
    }

    return (
        <ul>
            {data?.map(({ id, name, username, phone, email }) => (
                <li className="flex gap-8" key={id}>
                    <span>{id}</span>
                    <span>{name}</span>
                    <span>{username}</span>
                    <span>{email}</span>
                    <span>{phone}</span>
                </li>
            ))}
        </ul>
    );
}
