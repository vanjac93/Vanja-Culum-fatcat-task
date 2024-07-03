import { PageItemType } from '@homework-task/features/PageGenerator/types';

export const dummyLayouts: PageItemType[][] = [
    [
        {
            type: 'componentItemsShowcase',
            props: {
                items: [
                    {
                        description: 'First item description',
                        title: 'First Item title',
                    },
                    {
                        description: 'Second item description',
                        title: 'Second item title',
                    },
                ],
            },
        },
        {
            type: 'divider',
        },
        {
            type: 'componentPanelShowcase',
            props: {
                items: [
                    {
                        title: 'First panel item title',
                        description: 'First description',
                        image: '/media/cats/cat_1.png',
                    },
                    {
                        title: 'Second panel item title',
                        description: 'Second description',
                        image: '/media/cats/cat_2.png',
                    },
                    {
                        title: 'Third panel item title',
                        description: 'Third description',
                        image: '/media/cats/cat_3.png',
                    },
                    {
                        title: 'Fourth panel item title',
                        description: 'Fourth description',
                        image: '/media/cats/cat_4.png',
                    },
                    {
                        title: 'Fifth panel item title',
                        description: 'Fifth description',
                        image: '/media/cats/cat_5.png',
                    },
                    {
                        title: 'Sixth panel item title',
                        description: 'Sixth description',
                        image: '/media/cats/cat_6.png',
                    },
                ],
            },
        },
        {
            type: 'divider',
        },
        {
            type: 'layoutSection',
            props: {
                background: 'bg-cream',
            },
            components: [
                {
                    type: 'componentHero',
                    props: {
                        title: 'Hero within layout section',
                        image: '/media/cats/cat_7.png',
                    },
                },
            ],
        },
    ],
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
                        title: 'First hero',
                        image: '/media/cats/cat_6.png',
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
                        title: 'Second hero',
                        image: '/media/cats/cat_8.png',
                    },
                },
            ],
        },
    ],
];
