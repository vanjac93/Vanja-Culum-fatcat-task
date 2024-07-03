import { InputHTMLAttributes } from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <input className="px-4 py-2 min-w-[80px]" {...props} />;
};
