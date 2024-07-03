import { HTMLAttributes } from 'react';

import { ControllerProps, FieldValues } from 'react-hook-form';

export type FormControllerProps<T extends FieldValues, G> = ControllerProps<T> &
    HTMLAttributes<G> & {
        label?: string;
        disabled?: boolean;
        type?: string;
        helpText?: string;
        placeholder?: string;
    };
