import { Text } from '../../../components/base/typography';
import { useTokenBalances } from '../../../hooks';
import styles from './overviewPortfolio.module.css';
import { PortfolioItemCard } from './portfolioItemCard/PortfolioItemCard';
import { PortfolioItemList } from './portfolioItemList/PortfolioItemList';

export const OverviewPortfolio = () => {
  const { data, isLoading } = useTokenBalances();
  return (
    <>
      <div className={styles.overviewPortfolioItemCardContainer}>
        <PortfolioItemCard symbol="BTC" />
        <PortfolioItemCard symbol="ETH" />
        <PortfolioItemCard symbol="USDT" />
        <PortfolioItemCard symbol="USDC" />
      </div>
      <Text variant="h2">All assets</Text>
      {!!data.length ? (
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
      )}
    </>
  );
};
