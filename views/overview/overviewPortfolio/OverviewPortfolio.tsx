import { ListItemSkeleton } from '../../../components/base/list';
import { Text } from '../../../components/base/typography';
import { useTokenBalances } from '../../../hooks';
import styles from './overviewPortfolio.module.css';
import { PortfolioItemCard } from './portfolioItemCard/PortfolioItemCard';
import { PortfolioItemList } from './portfolioItemList/PortfolioItemList';

export const OverviewPortfolio = () => {
  const { data, isLoading } = useTokenBalances();
  const portfolioItemList = !!data.length ? (
    <PortfolioItemList
      items={
        data?.map((e) => ({
          iconUrl: e.logoURI,
          symbol: e.symbol,
          name: e.name,
          amountCrypto: e.totalBalance,
          amountDollar: e.priceUSD,
          contractAddress: e.contractAddress,
        })) || []
      }
    />
  ) : (
    <Text variant="p" styling="status">
      No assets
    </Text>
  );
  return (
    <>
      <section className={styles.overviewPortfolioItemCardContainer}>
        <PortfolioItemCard symbol="BTC" />
        <PortfolioItemCard symbol="ETH" />
        <PortfolioItemCard symbol="USDT" />
        <PortfolioItemCard symbol="USDC" />
      </section>
      <section>
        <Text variant="h2">All assets</Text>
        {isLoading ? <ListItemSkeleton /> : portfolioItemList}
      </section>
    </>
  );
};
