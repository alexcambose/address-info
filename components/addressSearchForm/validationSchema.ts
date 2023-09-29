import { ethers } from 'ethers';
import * as Yup from 'yup';

export const addressSearchFormValidationSchema = Yup.object().shape({
  address: Yup.string()
    .test('address', 'Invalid ethereum address!', ethers.isAddress)
    .required('Required'),
});
