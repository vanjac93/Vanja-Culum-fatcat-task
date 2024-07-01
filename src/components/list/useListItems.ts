import { useQuery } from '@tanstack/react-query';

interface ListItem {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const URL = 'https://jsonplaceholder.typicode.com/users';

export const useListItems = () =>
    useQuery<ListItem[]>({
        queryKey: ['list-items'],
        initialData: [],
        queryFn: async () => {
            const response = await fetch(URL);
            const json = await response.json();
            console.log('json', json);
            return json;
        },
    });
