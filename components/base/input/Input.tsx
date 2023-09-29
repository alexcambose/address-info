import classNames from 'classnames';
import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, ...props }, ref) => {
    return (
      <input
        className={classNames(
          styles.input,
          { [styles.inputError]: hasError },
          props.className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
