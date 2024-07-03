import { DividerProps } from '@homework-task/components/Divider';
import { HeroProps } from '@homework-task/components/Hero';
import { ItemsShowcaseProps } from '@homework-task/components/ItemsShowcase';
import { LayoutSectionProps } from '@homework-task/components/Layout';
import { PanelShowcaseProps } from '@homework-task/components/PanelShowcase';

export interface PageGeneratorProps {
    layout: PageItemType[];
}

export type PageItemType = { components?: PageItemType[] } & (
    | ({ type: 'divider' } & {
          props?: DividerProps;
      })
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

export type ItemType =
    | 'componentHero'
    | 'componentItemsShowcase'
    | 'layoutSection'
    | 'divider'
    | 'componentPanelShowcase';
