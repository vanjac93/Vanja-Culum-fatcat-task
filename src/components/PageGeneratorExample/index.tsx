import PageGenerator from '@homework-task/features/PageGenerator';

export default function PageGeneratorExample() {
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
}
