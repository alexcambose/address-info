'use client';
import { MagnifyingGlass } from '@phosphor-icons/react';
import classNames from 'classnames';
import { Form, Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import { HTMLAttributes } from 'react';
import { Button } from '../base/button';
import { InputControl } from '../base/input/InputControl';
import styles from './addressSearchForm.module.css';
import { addressSearchFormValidationSchema } from './validationSchema';

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
  const params = useParams();
  const initialValues: AddressFormValues = {
    address: '',
  };
  const router = useRouter();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addressSearchFormValidationSchema}
      validateOnBlur
      onSubmit={(values, actions) => {
        router.push('/overview/' + values.address);
        actions.setSubmitting(false);
      }}
    >
      <Form {...props} className={classNames(styles.form, props.className)}>
        <InputControl
          autoFocus={searchButton}
          aria-required
          id="address"
          name="address"
          aria-placeholder="Address"
          aria-label="Address input"
          placeholder={params.address ? (params.address as string) : 'Address'}
          icon={<MagnifyingGlass />}
          displayHelper={searchButton}
        />
        {searchButton && (
          <Button aria-label="Search">
            <MagnifyingGlass weight="bold" />
          </Button>
        )}
      </Form>
    </Formik>
  );
};
