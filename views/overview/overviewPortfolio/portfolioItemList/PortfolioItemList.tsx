import { PortfolioItem, PortfolioItemProps } from './PortfolioItem';
import style from './portfolioItemList.module.css';

export interface PortfolioItemListProps {
  items: PortfolioItemProps[];
}
export const PortfolioItemList = ({ items }: PortfolioItemListProps) => {
  return (
    <div className={style.portfolioItemList} aria-label="Portfolio">
      {items.map((item) => (
        <PortfolioItem key={item.symbol} {...item} />
      ))}
    </div>
  );
};
