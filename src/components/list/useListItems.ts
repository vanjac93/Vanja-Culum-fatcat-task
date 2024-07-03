import { useQuery } from '@tanstack/react-query';

import { PostType } from './types';

const POSTS_GET = 'https://jsonplaceholder.typicode.com/posts';

export const useListItems = () =>
    useQuery<PostType[]>({
        queryKey: ['posts'],
        queryFn: () => {
            return fetch(POSTS_GET)
                .then((data) => data.json())
                .then((data) => (data as PostType[]).slice(0, 5));
        },
    });
