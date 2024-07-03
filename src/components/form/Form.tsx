import { ReactNode } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { UseMutationResult } from '@tanstack/react-query';
import {
    DefaultValues,
    FieldValues,
    UseFormReturn,
    useForm,
} from 'react-hook-form';
import { ZodType } from 'zod';

type FormProps<T extends FieldValues, G> = {
    validationSchema: ZodType<G>;
    renderForm: (methods: UseFormReturn<T>) => ReactNode;
    mutation: UseMutationResult<T, Error, T>;
    defaultValues: DefaultValues<T>;
    successMessage: string;
    resetOnSubmit?: true;
};

export default function Form<T extends FieldValues, G>({
    renderForm,
    mutation,
    successMessage,
    resetOnSubmit,
    validationSchema,
    defaultValues,
}: FormProps<T, G>) {
    const methods = useForm<T>({
        resolver: zodResolver(validationSchema),
        defaultValues,
    });

    const { mutateAsync, isSuccess } = mutation;
    const { handleSubmit, reset } = methods;

    async function onSubmit(data: T) {
        await mutateAsync(data);
        if (resetOnSubmit) {
            reset({
                ...defaultValues,
            });
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {renderForm(methods)}
            {isSuccess && <p className="text-mainGreen">{successMessage}</p>}
        </form>
    );
}
