import { IsActiveMatchOptions } from '@angular/router';

export interface AncodeNavigationItem {
  id?: string;
  title?: string;
  subtitle?: string;
  type: 'aside' | 'basic' | 'collapsable' | 'divider' | 'group' | 'spacer';
  hidden?: (item: AncodeNavigationItem) => boolean;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
  link?: string;
  externalLink?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  exactMatch?: boolean;
  isActiveMatchOptions?: IsActiveMatchOptions;
  function?: (item: AncodeNavigationItem) => void;
  classes?: {
    title?: string;
    subtitle?: string;
    icon?: string;
    wrapper?: string;
  };
  icon?: string;
  badge?: {
    title?: string;
    classes?: string;
  };
  children?: AncodeNavigationItem[];
  meta?: any;
}

export type AncodeNavigationAppearance = 'default';

export type AncodeNavigationMode = 'over' | 'side';
export type AncodeNavigationPosition = 'left' | 'right';
