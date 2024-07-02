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
import { ReactNode } from 'react';

interface GeneratorProps {
    layout: LayoutItem[];
}

type LayoutItem = { components?: LayoutItem[] } & (
    | ({ type: 'componentHero' } & {
          props: HeroProps;
      })
    | ({
          type: 'componentItemsShowcase';
      } & {
          props: ItemsShowcaseProps;
      })
    | ({
          type: 'layoutSection';
      } & {
          props: LayoutSectionProps;
      })
    | ({
          type: 'componentPanelShowcase';
      } & {
          props: PanelShowcaseProps;
      })
);

type LayoutItemType =
    | 'componentHero'
    | 'componentItemsShowcase'
    | 'layoutSection'
    | 'componentPanelShowcase';

export default function Generator(props: GeneratorProps) {
    const { layout } = props;

    function renderLayoutItem(layoutItem: LayoutItem) {
        const { props, type, components } = layoutItem;
        const children = components?.map((itm) => renderLayoutItem(itm));

        const component: Record<LayoutItemType, ReactNode> = {
            layoutSection: (
                <Layout {...(props as LayoutSectionProps)}>{children}</Layout>
            ),
            componentHero: <Hero {...(props as HeroProps)} />,
            componentItemsShowcase: (
                <ItemsShowcase {...(props as ItemsShowcaseProps)} />
            ),
            componentPanelShowcase: (
                <PanelShowcase {...(props as PanelShowcaseProps)} />
            ),
        };

        return <>{component[type]}</>;
    }

    return <>{layout.map((layoutItem) => renderLayoutItem(layoutItem))}</>;
}
