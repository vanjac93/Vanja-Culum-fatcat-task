import { useQuery } from '@tanstack/react-query';

import { UserType } from './types';

const USERS_GET_URL = 'https://jsonplaceholder.typicode.com/users';

export const useListItems = () =>
    useQuery<UserType[]>({
        queryKey: ['posts'],
        queryFn: () => {
            return fetch(USERS_GET_URL)
                .then((data) => data.json())
                .then((data) => (data as UserType[]).slice(0, 5));
        },
    });
