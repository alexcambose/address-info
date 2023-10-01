import classNames from 'classnames';
import { SVGAttributes, forwardRef } from 'react';
import styles from './icon.module.css';

export interface IconProps extends SVGAttributes<HTMLElement> {
  component: JSX.Element;
}

export const Icon = forwardRef<HTMLElement, IconProps>(
  ({ component: Component, className, ...props }, ref) => {
    return (
      // @ts-ignore
      <Component
        className={classNames(styles.icon, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';
