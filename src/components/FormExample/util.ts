import { z } from 'zod';

import { ExampleFormType } from './types';

export const validationSchema = z.object({
    title: z.string().trim().min(5, 'Title must be longer than 5 characters'),
    body: z.string().trim().max(20, 'Body must be shorter than 20 characters'),
});

export const defaultValues: ExampleFormType = {
    title: '',
    body: '',
};
