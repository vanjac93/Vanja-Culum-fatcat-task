import { FieldValues, useController } from 'react-hook-form';
import Field from '../Field';
import Input from '../Input';
import Label from '../Label';
import { FormControllerProps } from './types';
import ControllerHelpText from './ControllerHelpText';

export default function InputController<T extends FieldValues>(
    props: Omit<FormControllerProps<T, HTMLInputElement>, 'render'>
) {
    const { label, name, control, placeholder, rules, disabled } = props;

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    return (
        <Field>
            {label && <Label name={name} text={label} />}
            <Input
                disabled={disabled}
                onChange={field.onChange}
                value={field.value}
                name={field.name}
                placeholder={placeholder}
            />
            <ControllerHelpText error={error} />
        </Field>
    );
}
