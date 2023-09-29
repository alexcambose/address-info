'use client';
import * as React from 'react';
import { Formik, FormikHelpers, FormikProps, Form, FieldProps } from 'formik';
import { InputControl } from '../base/input/InputControl';
import { addressSearchFormValidationSchema } from './validationSchema';
import { MagnifyingGlass } from '@phosphor-icons/react';

interface AddressFormValues {
  address: string;
}

export const AddressSearchForm = () => {
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
      <Form>
        <InputControl
          autoFocus
          aria-required
          id="address"
          name="address"
          placeholder="Address"
          icon={<MagnifyingGlass />}
        />
        aa
      </Form>
    </Formik>
  );
};
