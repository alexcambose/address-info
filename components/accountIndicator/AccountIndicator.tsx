import { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../base/icon';
import SvgETH from '../../assets/eth.svg';
import { Card } from '../base/card';
import styles from './accountIndicator.module.css';
import Skeleton from 'react-loading-skeleton';

export interface AccountIndicatorProps extends HTMLAttributes<HTMLFormElement> {
  symbol?: string;
  isLoading?: boolean;
}

export const AccountIndicator = ({
  children,
  symbol = 'ETH',
  isLoading,
}: AccountIndicatorProps) => {
  if (isLoading) {
    return (
      <Card>
        <Skeleton width={50} />
      </Card>
    );
  }
  return (
    <Card icon={<Icon component={SvgETH} />}>
      <span className={styles.balanceText}>
        {children} {symbol}
      </span>
    </Card>
  );
};
