import { useQuery } from '@tanstack/react-query';

interface PostType {
    id: string;
    body: string;
    userId: string;
    title: string;
}

const POSTS_GET = 'https://jsonplaceholder.typicode.com/posts';

export const useListItems = () =>
    useQuery<PostType[]>({
        queryKey: ['list-items'],
        initialData: [],
        queryFn: () => {
            return fetch(POSTS_GET)
                .then((data) => data.json())
                .then((data) => (data as PostType[]).slice(0, 5));
        },
    });
