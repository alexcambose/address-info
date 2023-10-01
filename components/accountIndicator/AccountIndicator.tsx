import { HTMLAttributes } from 'react';
import Skeleton from 'react-loading-skeleton';
import SvgETH from '../../assets/eth.svg';
import { Card } from '../base/card';
import { Icon } from '../base/icon';
import styles from './accountIndicator.module.css';

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
        <Skeleton width={80} />
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
