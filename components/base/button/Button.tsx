import classNames from 'classnames';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        className={classNames(styles.button, props.className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'button';
