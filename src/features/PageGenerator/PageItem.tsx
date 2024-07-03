import { ReactNode } from 'react';

import { Hero, HeroProps } from '@homework-task/components/Hero';
import {
    ItemsShowcase,
    ItemsShowcaseProps,
} from '@homework-task/components/ItemsShowcase';
import { Layout, LayoutSectionProps } from '@homework-task/components/Layout';
import {
    PanelShowcase,
    PanelShowcaseProps,
} from '@homework-task/components/PanelShowcase';

import { ItemType, PageItemType } from './types';

export default function PageItem({ pageItem }: { pageItem: PageItemType }) {
    const { props, type, components } = pageItem;

    const component: Record<ItemType, ReactNode> = {
        layoutSection: (
            <Layout {...(props as LayoutSectionProps)}>
                {components?.map((pageItem, indx) => (
                    <PageItem key={indx} pageItem={pageItem} />
                ))}
            </Layout>
        ),
        componentHero: <Hero {...(props as HeroProps)} />,
        componentItemsShowcase: (
            <ItemsShowcase {...(props as ItemsShowcaseProps)} />
        ),
        componentPanelShowcase: (
            <PanelShowcase {...(props as PanelShowcaseProps)} />
        ),
    };

    return component[type];
}
