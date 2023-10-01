'use client';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Form, Formik } from 'formik';
import { InputControl } from '../base/input/InputControl';
import { addressSearchFormValidationSchema } from './validationSchema';
import { Button } from '../base/button';
import styles from './addressSearchForm.module.css';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { useParams, useRouter } from 'next/navigation';

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
          placeholder={initialValues ? (params.address as string) : 'Address'}
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
