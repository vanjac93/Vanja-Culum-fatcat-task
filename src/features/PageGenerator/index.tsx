import PageItem from './PageItem';
import { PageGeneratorProps } from './types';

export default function PageGenerator(props: PageGeneratorProps) {
    const { layout } = props;

    return (
        <>
            {layout.map((pageItem, i) => (
                <PageItem key={i} pageItem={pageItem} />
            ))}
        </>
    );
}
