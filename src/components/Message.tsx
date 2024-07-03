import { clsx } from 'clsx';

type MessageType = 'info' | 'success' | 'error';

export const Message = ({
    text,
    type = 'info',
    onClose,
}: {
    text: string;
    type?: MessageType;
    onClose?: () => void;
}) => {
    return (
        <div
            className={clsx(
                'flex',
                'justify-between',
                'p-4',
                'my-2',
                'rounded-md',
                'text-white',
                type === 'success' && 'bg-mainGreen',
                type === 'error' && 'bg-mainRed',
                type === 'info' && ['bg-primary']
            )}
        >
            <span>{text}</span>
            {onClose && (
                <span onClick={onClose} className="cursor-pointer">
                    Close
                </span>
            )}
        </div>
    );
};
