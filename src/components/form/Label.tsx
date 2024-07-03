interface LabelProps {
    text: string;
    name: string;
}

export const Label = (props: LabelProps) => {
    const { name, text } = props;

    return (
        <label className="font-extralight" htmlFor={name}>
            {text}
        </label>
    );
};
