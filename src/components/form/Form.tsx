import { ReactNode } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    DefaultValues,
    FieldValues,
    UseFormReturn,
    useForm,
} from 'react-hook-form';
import { ZodType } from 'zod';
import { UseMutationResult } from '@tanstack/react-query';

type FormProps<T extends FieldValues, G> = {
    validationSchema: ZodType<G>;
    renderForm: (methods: UseFormReturn<T>) => ReactNode;
    mutation: UseMutationResult<T, Error, T, unknown>;
    defaultValues: DefaultValues<T>;
    successMessage: string;
};

export default function Form<T extends FieldValues, G>({
    renderForm,
    mutation,
    successMessage,
    validationSchema,
    defaultValues,
}: FormProps<T, G>) {
    const methods = useForm<T>({
        resolver: zodResolver(validationSchema),
        defaultValues,
    });

    const { mutate, isSuccess } = mutation;
    const { handleSubmit } = methods;

    async function onSubmit(data: T) {
        await mutate(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {renderForm(methods)}
            {isSuccess && <p>{successMessage}</p>}
        </form>
    );
}