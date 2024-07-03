import {
    MutationFunction,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';

import { ExampleFormType } from './types';
import { defaultValues, validationSchema } from './util';
import { Button } from '../Button';
import InputController from '../form/controllers/InputController';
import Form from '../form/Form';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

const mutationFn: MutationFunction<ExampleFormType, ExampleFormType> = (
    data: ExampleFormType
) => {
    return fetch(POST_URL, {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(() => ({
        title: '',
        body: '',
    }));
};

function usePostMutation() {
    const queryClient = useQueryClient();

    return useMutation<ExampleFormType, Error, ExampleFormType>({
        mutationKey: ['post-create'],
        mutationFn,
        onSuccess: () => {
            return queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });
}

export const FormExample = () => {
    const mutation = usePostMutation();

    const { isPending } = mutation;

    return (
        <Form
            defaultValues={defaultValues}
            resetOnSubmit
            mutation={mutation}
            successMessage="Post created successfully!"
            validationSchema={validationSchema}
            renderForm={({ control }) => {
                return (
                    <>
                        <InputController
                            control={control}
                            name="title"
                            placeholder="Enter title"
                            label="Title"
                        />
                        <InputController
                            control={control}
                            name="body"
                            placeholder="Enter body"
                            label="Body"
                        />
                        <Button type="submit">
                            {isPending ? 'Loading...' : 'Submit'}
                        </Button>
                    </>
                );
            }}
        />
    );
};
