import classNames from 'classnames';
import React, { HTMLAttributes, forwardRef } from 'react';
import styles from './container.module.css';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ ...props }, ref) => {
    return (
      <div
        className={classNames(styles.container, props.className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = 'container';
