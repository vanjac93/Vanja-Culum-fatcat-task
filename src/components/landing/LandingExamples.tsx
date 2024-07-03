import { clsx } from 'clsx';

import { ExampleContainer } from '../ExampleContainer';
import { FormExample } from '../FormExample';
import ListExample from '../ListExample';
import PageGeneratorExample from '../PageGeneratorExample';

export const LandingExamples = () => {
    return (
        <section
            className={clsx('flex', 'flex-col', 'gap-8', 'p-8', 'bg-cream')}
        >
            <ExampleContainer
                header="List Example"
                text="This is the list component"
            >
                <ListExample />
            </ExampleContainer>
            <ExampleContainer
                header="Form Example"
                text="This is the form example"
            >
                <FormExample />
            </ExampleContainer>
            <ExampleContainer
                header="Page generator example"
                text="Select different dummy layouts from the dropdown for the page generator component."
            >
                <PageGeneratorExample />
            </ExampleContainer>
        </section>
    );
};
