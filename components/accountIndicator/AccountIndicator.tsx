import { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../base/icon';
import SvgETH from '../../assets/eth.svg';
import { Card } from '../base/card';
import styles from './accountIndicator.module.css';

export interface AccountIndicatorProps
  extends HTMLAttributes<HTMLFormElement> {}

export const AccountIndicator = ({ children }: AccountIndicatorProps) => {
  return (
    <Card icon={<Icon component={SvgETH} />}>
      <span className={styles.balanceText}>{children}</span>
    </Card>
  );
};
