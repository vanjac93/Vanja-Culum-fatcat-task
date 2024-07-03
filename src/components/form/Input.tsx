import { InputHTMLAttributes } from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className="px-4 py-2 rounded-md border-2 border-gray10 focus:border-primary min-w-[80px]"
            {...props}
        />
    );
};
