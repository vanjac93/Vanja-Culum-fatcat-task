import {
    QueryClient,
    QueryClientProvider,
    useMutation,
} from '@tanstack/react-query';
import './styles.css';
import { Form } from './components/form';
import { z } from 'zod';
import InputController from './components/form/controllers/InputController';
import Generator from './features/PageGenerator';
import PageGenerator from './features/PageGenerator';

const client = new QueryClient();

const validationSchema = z.object({
    title: z.string().trim().min(30, 'baba yaga'),
    body: z.string().trim().max(50),
});

interface TestFormType {
    title: string;
    body: string;
}

const defaultValues: TestFormType = {
    title: '',
    body: '',
};

function Test() {
    return (
        <PageGenerator
            layout={[
                {
                    type: 'layoutSection',
                    props: {
                        background: 'bg-yellow',
                    },
                    components: [
                        {
                            type: 'componentHero',
                            props: {
                                title: 'Second hero',
                                image: '',
                            },
                        },
                    ],
                },
                {
                    type: 'layoutSection',
                    props: {
                        background: 'bg-slate-500',
                    },
                    components: [
                        {
                            type: 'componentHero',
                            props: {
                                title: 'First hero',
                                image: '',
                            },
                        },
                    ],
                },
            ]}
        />
    );
    // const mutation = useMutation<TestFormType, Error, TestFormType>({
    //     mutationKey: ['test'],
    //     mutationFn: (data) => {
    //         console.log('mut fn', data);
    //         return new Promise((res, rej) => {
    //             setTimeout(() => {
    //                 res(data);
    //             }, 2000);
    //         });
    //     },
    // });

    // const { isPending } = mutation;

    // return (
    //     <Form
    //         defaultValues={defaultValues}
    //         mutation={mutation}
    //         successMessage="Well done"
    //         validationSchema={validationSchema}
    //         renderForm={({ control }) => {
    //             return (
    //                 <>
    //                     <InputController
    //                         control={control}
    //                         name="title"
    //                         placeholder="Enter title"
    //                         label="Title"
    //                     />
    //                     <InputController
    //                         control={control}
    //                         name="body"
    //                         placeholder="Enter body"
    //                         label="Body"
    //                     />
    //                     <button type="submit">
    //                         {isPending ? 'Loading...' : 'Submit'}
    //                     </button>
    //                 </>
    //             );
    //         }}
    //     />
    // );
}

function App() {
    return (
        <QueryClientProvider client={client}>
            <main>
                <Test />
                {/* <List /> */}
                {/* <Landing /> */}
            </main>
        </QueryClientProvider>
    );
}

export default App;
