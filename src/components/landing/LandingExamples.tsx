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
                header="List Component Example"
                text={`This is the list component. As there was no mention of a UI with a table, 
                    and there isn't lots of data to show, I've made list items a simple card-like items.`}
            >
                <ListExample />
            </ExampleContainer>
            <ExampleContainer
                header="Form Example"
                text="This is the form component implementation. Implemented with react-hook-form, validation with zodResolver, mode is onSubmit.
                Used asyncMutate() to allow fields reset after action is finished.
                Inputs are made as separate components with min-width, to make them reusable outside of forms. 
                Controllers are using full width with form fields."
            >
                <FormExample />
            </ExampleContainer>
            <ExampleContainer
                header="Page generator example"
                text="Select different dummy layouts from the dropdown for the page generator component.
                Page generator is recursive for components that are set up to get children content (like LayoutSection).
                NOTE: Generator is made according to requirements examples, so no ReactNode children outside of typed components is allowed."
            >
                <PageGeneratorExample />
            </ExampleContainer>
        </section>
    );
};
