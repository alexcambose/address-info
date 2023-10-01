import { PortfolioItemCard } from './portfolioItemCard/PortfolioItemCard';
import styles from './overviewPortfolio.module.css';
import { PortfolioItemList } from './portfolioItemList/PortfolioItemList';
import { useQuery } from 'react-query';
import { Text } from '../../../components/base/typography';
import { useTokenBalances } from '../../../hooks';
const mockData = [
  {
    address: '0x0000000000000000000000000000000000000000',
    chainId: 1,
    symbol: 'ETH',
    decimals: 18,
    name: 'ETH',
    priceUSD: '1674.96',
    logoURI:
      'https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png',
    coinKey: 'ETH',
  },
  {
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    chainId: 1,
    symbol: 'WETH',
    decimals: 18,
    name: 'WETH',
    priceUSD: '1675.88',
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/61844453e63cf81301f845d7864236f6.png',
    coinKey: 'WETH',
  },
  {
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    chainId: 1,
    symbol: 'USDC',
    decimals: 6,
    name: 'USD Coin',
    priceUSD: '1',
    logoURI:
      'https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png',
    coinKey: 'USDC',
  },
  {
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    chainId: 1,
    symbol: 'USDT',
    decimals: 6,
    name: 'USDT',
    priceUSD: '0.999975',
    logoURI:
      'https://static.debank.com/image/coin/logo_url/usdt/23af7472292cb41dc39b3f1146ead0fe.png',
    coinKey: 'USDT',
  },
  {
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    chainId: 1,
    symbol: 'DAI',
    decimals: 18,
    name: 'DAI Stablecoin',
    priceUSD: '0.99985',
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x6b175474e89094c44da98b954eedeac495271d0f/549c4205dbb199f1b8b03af783f35e71.png',
    coinKey: 'DAI',
  },
  {
    address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    chainId: 1,
    symbol: 'SAI',
    decimals: 18,
    name: 'Dai Stablecoin v1.0',
    priceUSD: '8.6590490356162',
    logoURI:
      'https://static.debank.com/image/token/logo_url/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359/4b3369d1f8d2024c0f3dd46a3347d84d.png',
    coinKey: 'DAI',
  },
  {
    address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    chainId: 1,
    symbol: 'WBTC',
    decimals: 8,
    name: 'WBTC',
    priceUSD: '26962.2',
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/d3c52e7c7449afa8bd4fad1c93f50d93.png',
    coinKey: 'WBTC',
  },
  {
    address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    chainId: 1,
    symbol: 'SUSHI',
    decimals: 18,
    name: 'SUSHI',
    priceUSD: '0.6000051131951101',
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2/930cd4a36e687eaeddbcf9f3fd22d023.png',
    coinKey: 'SUSHI',
  },
  {
    address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
    chainId: 1,
    symbol: 'BUSD',
    decimals: 18,
    name: 'BUSD',
    priceUSD: '1.0001',
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x4fabb145d64652a948d72533023f6e7a623c7c53/588ad5043e23b6c46aeda945852c3273.png',
    coinKey: 'BUSD',
  },
  {
    address: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
    chainId: 1,
    symbol: 'BNB',
    decimals: 18,
    name: 'BNB',
    priceUSD: '764.5586600126713',
    logoURI:
      'https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png',
    coinKey: 'BNB',
  },
];
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
      <Text variant="h1">All tokens</Text>
      <PortfolioItemList
        items={
          data.tokens?.map((e: any) => ({
            iconUrl: e.logoURI,
            symbol: e.symbol,
            name: e.name,
            amountCrypto: '123',
            amountDollar: e.priceUSD,
          })) || []
        }
      />
    </>
  );
};
