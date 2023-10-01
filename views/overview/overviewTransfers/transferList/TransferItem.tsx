import { DownloadSimple, UploadSimple } from '@phosphor-icons/react';
import style from './transferItem.module.css';
import { Icon } from '../../../../components/base/icon';
import { ReactElement } from 'react';
import { trimAddress } from '../../../../utils/stringUtils';
import dayjs from 'dayjs';
import { ListItem } from '../../../../components/base/list';

export interface TransferItemProps {
  timestamp: number;
  txHash: string;
  amount: string;
  from: string;
  to: string;
  type: 'DEPOSIT' | 'WITHDRAW';
  blockNumber: number;
  tokenSymbol: string;
  tokenName: string;
}

export const TransferItem = ({
  timestamp,
  txHash,
  amount,
  to,
  from,
  type,
  tokenSymbol,
  blockNumber,
  tokenName,
}: TransferItemProps) => {
  const icon = (type === 'DEPOSIT'
    ? DownloadSimple
    : UploadSimple) as unknown as ReactElement<any, any>;
  const label =
    type === 'DEPOSIT'
      ? 'Deposit from ' + trimAddress(from)
      : 'Withdraw to ' + trimAddress(to);

  return (
    <ListItem
      icon={
        <div className={style.transferItemIcon}>
          <Icon component={icon} />
        </div>
      }
      leftSide={
        <div className={style.transferItemHeader}>
          <span>{label}</span>
          <span>{dayjs.unix(timestamp).format('MMM D, YYYY, h:mma')}</span>
        </div>
      }
      rightSide={
        <div>
          {amount}
          {tokenSymbol}
        </div>
      }
    />
  );
};
