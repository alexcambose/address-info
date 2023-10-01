import classNames from 'classnames';
import { forwardRef, HTMLProps } from 'react';
import styles from './text.module.css';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'p';

export type TextStylingVariant = 'normal' | 'status';
export interface TextProps extends HTMLProps<HTMLElement> {
  variant?: TextVariant; // You can extend this as needed
  styling?: TextStylingVariant;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, styling = 'normal', variant = 'p', ...rest }, ref) => {
    const Tag = variant as JSX.ElementType;
    return (
      <Tag
        className={classNames(styles[variant], {
          [styles.textStatus]: styling === 'status',
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);
Text.displayName = 'Text';
