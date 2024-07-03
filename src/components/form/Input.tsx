import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
    return (
        <input
            className="border-none text-[13px] outline-none bg-transparent"
            {...props}
        />
    );
};
