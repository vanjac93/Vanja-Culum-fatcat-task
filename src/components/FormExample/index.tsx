import { useMutation } from '@tanstack/react-query';

import { ExampleFormType } from './types';
import { defaultValues, validationSchema } from './util';
import InputController from '../form/controllers/InputController';
import Form from '../form/Form';

export default function FormExample() {
    const mutation = useMutation<ExampleFormType, Error, ExampleFormType>({
        mutationKey: ['test'],
        mutationFn: (data) => {
            console.log('mut fn', data);
            return new Promise((res) => {
                setTimeout(() => {
                    res(data);
                }, 2000);
            });
        },
    });

    const { isPending } = mutation;

    return (
        <Form
            defaultValues={defaultValues}
            mutation={mutation}
            successMessage="Well done"
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
                        <button type="submit">
                            {isPending ? 'Loading...' : 'Submit'}
                        </button>
                    </>
                );
            }}
        />
    );
}
