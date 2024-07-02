import { FieldError } from 'react-hook-form';

const ControllerHelpText = ({
    helpText,
    error,
}: {
    helpText?: string;
    error?: FieldError;
}) => {
    return (
        <>
            {helpText && <p>{helpText}</p>}
            {error && (
                <p className="text-red">
                    {error.message || 'Please fill out this field.'}
                </p>
            )}
        </>
    );
};

export default ControllerHelpText;
