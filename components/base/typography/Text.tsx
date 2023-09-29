import React, { forwardRef, HTMLProps, ReactNode } from 'react';
import styles from './text.module.css';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'p';

export interface TextProps extends HTMLProps<HTMLElement> {
  variant?: TextVariant; // You can extend this as needed
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, variant = 'p', ...rest }, ref) => {
    const Tag = variant as JSX.ElementType;
    return (
      <Tag className={styles[variant]} ref={ref} {...rest}>
        {children}
      </Tag>
    );
  }
);
Text.displayName = 'Text';
