import { useQuery } from '@tanstack/react-query';

interface ListItem {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export const useListItems = () =>
    useQuery<ListItem[]>({
        queryKey: ['list-items'],
        initialData: [],
        queryFn: () => {
            return new Promise(() => {});
        },
    });
