import { DownloadSimple, UploadSimple } from '@phosphor-icons/react';
import style from './transferItem.module.css';
import { Icon } from '../../../../components/base/icon';
import { ReactElement } from 'react';
import {
  localizedStringNumber,
  trimAddress,
} from '../../../../utils/stringUtils';
import dayjs from 'dayjs';
import { ListItem } from '../../../../components/base/list';
import Image from 'next/image';
import { useExplorerUrl } from '../../../../hooks';

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
  logoURI: string;
  transferUSD: string;
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
  logoURI,
  transferUSD,
}: TransferItemProps) => {
  const explorerUrl = useExplorerUrl(txHash);
  const icon = (type === 'DEPOSIT'
    ? DownloadSimple
    : UploadSimple) as unknown as ReactElement<any, any>;
  const address = type === 'DEPOSIT' ? from : to;
  const label =
    type === 'DEPOSIT'
      ? 'Deposit from ' + trimAddress(address)
      : 'Withdraw to ' + trimAddress(address);

  return (
    <ListItem
      href={explorerUrl}
      icon={
        <div className={style.transferItemIcon}>
          <Icon component={icon} />
        </div>
      }
      leftSide={
        <div className={style.transferItemHeader}>
          <span title={address}>{label}</span>
          <span className={style.transferItemSubtitle}>
            {dayjs.unix(timestamp).format('MMM D, YYYY, h:mma')}
          </span>
        </div>
      }
      rightSide={
        <div className={style.transferItemDetails}>
          <div className={style.transferItemValue}>
            <Image
              className={style.transferItemDetailsImage}
              src={logoURI}
              alt={tokenSymbol + ' logo'}
              width={60}
              height={60}
            />
            {localizedStringNumber(amount)} {tokenSymbol}
          </div>
          <span className={style.transferItemSubtitle}>
            ${localizedStringNumber(transferUSD)}
          </span>
        </div>
      }
    />
  );
};
