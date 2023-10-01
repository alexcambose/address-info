import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode, forwardRef } from 'react';
import styles from './listItem.module.css';

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  leftSide: ReactNode;
  rightSide: ReactNode;
}

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  ({ icon, leftSide, rightSide, ...props }, ref) => {
    return (
      <div
        className={classNames(styles.listItem, props.className)}
        ref={ref}
        {...props}
      >
        <div className={styles.listItemIcon}>{icon}</div>
        <div className={styles.listItemLeftSide}>{leftSide}</div>
        <div className={styles.listItemRightSide}>{rightSide}</div>
      </div>
    );
  }
);

ListItem.displayName = 'ListItem';
