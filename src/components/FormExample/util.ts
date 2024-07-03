import { z } from 'zod';

import { ExampleFormType } from './types';

export const validationSchema = z.object({
    title: z.string().trim().min(30, 'baba yaga'),
    body: z.string().trim().max(50),
});

export const defaultValues: ExampleFormType = {
    title: '',
    body: '',
};
