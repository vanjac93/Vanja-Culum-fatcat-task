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
                text={`This task describes a list format, but doesn't specify it cannot be a table in
order to show all the columns aligned properly, so it's implemented with a table prepared to be styled further.`}
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
