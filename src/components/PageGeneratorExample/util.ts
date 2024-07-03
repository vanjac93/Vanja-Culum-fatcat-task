import { PageItemType } from '@homework-task/features/PageGenerator/types';

export const dummyLayouts: PageItemType[][] = [
    [
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
    ],
];
