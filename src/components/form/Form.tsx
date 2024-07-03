import { ReactNode, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { UseMutationResult } from '@tanstack/react-query';
import {
    DefaultValues,
    FieldValues,
    UseFormReturn,
    useForm,
} from 'react-hook-form';
import { ZodType } from 'zod';

import { Message } from '../Message';

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
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const methods = useForm<T>({
        resolver: zodResolver(validationSchema),
        defaultValues,
    });

    const { mutateAsync } = mutation;
    const { handleSubmit, reset } = methods;

    async function onSubmit(data: T) {
        if (showSuccessMessage) {
            setShowSuccessMessage(false);
        }

        await mutateAsync(data);
        if (resetOnSubmit) {
            setShowSuccessMessage(true);
            reset({
                ...defaultValues,
            });
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {showSuccessMessage && (
                <Message
                    onClose={() => setShowSuccessMessage(false)}
                    text={successMessage}
                    type="success"
                />
            )}
            {renderForm(methods)}
        </form>
    );
}
