import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode, forwardRef } from 'react';
import styles from './listItem.module.css';

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  leftSide: ReactNode;
  rightSide: ReactNode;
  href?: string;
}

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  ({ icon, href, leftSide, rightSide, ...props }, ref) => {
    const content = (
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
    if (href) {
      return (
        <a className={styles.listItemAnchor} href={href} target="_blank">
          {content}
        </a>
      );
    }
    return content;
  }
);

ListItem.displayName = 'ListItem';
