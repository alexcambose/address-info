import Image from 'next/image';
import { ListItem } from '../../../../components/base/list';
import { useExplorerUrl } from '../../../../hooks';
import { localizedStringNumber } from '../../../../utils/stringUtils';
import style from './portfolioItem.module.css';

export interface PortfolioItemProps {
  iconUrl: string;
  symbol: string;
  name: string;
  amountCrypto: string;
  amountDollar: string;
  contractAddress: string;
}
export const PortfolioItem = ({
  iconUrl,
  symbol,
  name,
  amountCrypto,
  amountDollar,
  contractAddress,
}: PortfolioItemProps) => {
  const openExplorer = useExplorerUrl(contractAddress);
  return (
    <ListItem
      href={openExplorer}
      icon={
        <Image
          className={style.portfolioItemImage}
          src={iconUrl}
          width={100}
          height={100}
          alt={symbol + ' logo'}
        />
      }
      leftSide={
        <>
          <span className={style.portfolioItemSymbol}>{symbol}</span>
          <span className={style.portfolioItemNameFull}>{name}</span>
        </>
      }
      rightSide={
        <>
          <span className={style.portfolioItemValueCrypto}>
            {localizedStringNumber(amountCrypto)} {symbol}
          </span>
          <span className={style.portfolioItemValueDollar}>
            ${localizedStringNumber(amountDollar)}
          </span>
        </>
      }
    />
  );
};
