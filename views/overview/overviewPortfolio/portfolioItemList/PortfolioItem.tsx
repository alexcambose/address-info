import { ListItem } from '../../../../components/base/list';
import style from './portfolioItem.module.css';
import Image from 'next/image';

export interface PortfolioItemProps {
  iconUrl: string;
  symbol: string;
  name: string;
  amountCrypto: string;
  amountDollar: string;
}
export const PortfolioItem = ({
  iconUrl,
  symbol,
  name,
  amountCrypto,
  amountDollar,
}: PortfolioItemProps) => {
  return (
    <ListItem
      icon={
        <Image
          className={style.portfolioItemImage}
          src={iconUrl}
          width={100}
          height={100}
          alt="Picture of the author"
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
            {amountCrypto} {symbol}
          </span>
          <span className={style.portfolioItemValueDollar}>
            ${amountDollar}
          </span>
        </>
      }
    >
      {/* <div className={style.portfolioItemName}></div>
      <div className={style.portfolioItemValue}></div> */}
    </ListItem>
  );
};
