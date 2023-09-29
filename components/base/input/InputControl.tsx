import { Field, FieldProps } from 'formik';
import { ReactNode, forwardRef } from 'react';
import { Input, InputProps } from '.';
import styles from './styles.module.css';
import classNames from 'classnames';

export interface InputControlProps extends InputProps {
  helperContent?: ReactNode;
  icon?: ReactNode;
}

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ helperContent, icon, ...props }, ref) => {
    return (
      <Field name={props.name}>
        {({
          field,
          form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }: FieldProps) => {
          const hasError = !!meta.value && meta.touched && !!meta.error;
          const shouldDisplayHelper = hasError || helperContent;
          return (
            <div>
              <Input
                type="text"
                hasError={hasError}
                {...field}
                {...props}
                ref={ref}
              />
              {shouldDisplayHelper && (
                <div
                  role="alert"
                  className={classNames(styles.inputHelper, {
                    [styles.inputHelperError]: hasError,
                  })}
                >
                  {meta.error ? meta.error : helperContent}
                </div>
              )}
            </div>
          );
        }}
      </Field>
    );
  }
);

InputControl.displayName = 'InputControl';
