interface LabelProps {
    text: string;
    name: string;
}

export default function Label(props: LabelProps) {
    const { name, text } = props;

    return <label htmlFor={name}>{text}</label>;
}
