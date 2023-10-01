import classNames from 'classnames';
import { Field, FieldProps } from 'formik';
import { ReactNode, forwardRef } from 'react';
import { Input, InputProps } from '.';
import styles from './inputControl.module.css';

export interface InputControlProps extends InputProps {
  helperContent?: ReactNode;
  icon?: ReactNode;
  displayHelper?: boolean;
}

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
  ({ helperContent, displayHelper = true, icon, ...props }, ref) => {
    return (
      <Field name={props.name}>
        {({ field, meta }: FieldProps) => {
          const hasError = !!meta.value && meta.touched && !!meta.error;
          const shouldDisplayHelper =
            (hasError || helperContent) && displayHelper;
          return (
            <div className={styles.inputControlContainer}>
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
