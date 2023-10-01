import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode, forwardRef } from 'react';
import styles from './card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ icon, children, ...props }, ref) => {
    return (
      <div
        className={classNames(styles.card, props.className)}
        ref={ref}
        {...props}
      >
        {icon && <div className={styles.iconContainer}>{icon}</div>}
        <div>{children}</div>
      </div>
    );
  }
);

Card.displayName = 'Card';
