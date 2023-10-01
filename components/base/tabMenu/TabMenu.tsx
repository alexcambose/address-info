import classNames from 'classnames';
import { HTMLAttributes, forwardRef } from 'react';
import { TabItem, TabItemProps } from './TabItem';
import styles from './tabMenu.module.css';

export interface TabMenuProps extends HTMLAttributes<HTMLDivElement> {
  tabs: {
    id: TabItemProps['id'];
    label: string;
  }[];
  selectedId: TabItemProps['id'];
  onSelectedIdChange: (v: TabItemProps['id']) => void;
}

export const TabMenu = forwardRef<HTMLDivElement, TabMenuProps>(
  ({ tabs, selectedId, onSelectedIdChange, ...props }, ref) => {
    return (
      <div
        className={classNames(styles.tabMenu, props.className)}
        ref={ref}
        {...props}
      >
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            id={tab.id}
            onClick={onSelectedIdChange}
            isSelected={tab.id === selectedId}
          >
            {tab.label}
          </TabItem>
        ))}
      </div>
    );
  }
);

TabMenu.displayName = 'TabMenu';
