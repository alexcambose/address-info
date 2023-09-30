'use client';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Form, Formik } from 'formik';
import { InputControl } from '../base/input/InputControl';
import { addressSearchFormValidationSchema } from './validationSchema';
import { Button } from '../base/button';
import styles from './addressSearchForm.module.css';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface AddressSearchFormProps
  extends HTMLAttributes<HTMLFormElement> {
  searchButton?: boolean;
}
interface AddressFormValues {
  address: string;
}

export const AddressSearchForm = ({
  searchButton = true,
  ...props
}: AddressSearchFormProps) => {
  const initialValues: AddressFormValues = { address: '' };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addressSearchFormValidationSchema}
      validateOnBlur
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form {...props} className={classNames(styles.form, props.className)}>
        <InputControl
          autoFocus
          aria-required
          id="address"
          name="address"
          placeholder="Address"
          icon={<MagnifyingGlass />}
        />
        {searchButton && (
          <Button>
            <MagnifyingGlass weight="bold" />
          </Button>
        )}
      </Form>
    </Formik>
  );
};
