import BtcSVG from '../../../../assets/btc.svg';
import EthSVG from '../../../../assets/eth.svg';
import UsdcSVG from '../../../../assets/usdc.svg';
import UsdtSVG from '../../../../assets/usdt.svg';
import { Icon } from '../../../../components/base/icon';
import { Text } from '../../../../components/base/typography';
import { useTokenBalances } from '../../../../hooks';
import { localizedStringNumber } from '../../../../utils/stringUtils';
import { PortfolioItemCardSkeleton } from './PortfolioItemCardSkeleton';
import styles from './portfolioItemCard.module.css';

const icons = {
  BTC: {
    component: BtcSVG,
    accentColor: 'rgb(242, 169, 0)',
    containerBackgroundColor: 'rgba(242, 169, 0, 0.1)',
    labelName: 'Bitcoin',
  },
  ETH: {
    component: EthSVG,
    accentColor: 'rgb(77, 143, 235)',
    containerBackgroundColor: 'rgba(33, 92, 175, 0.1)',
    labelName: 'Ethereum',
  },
  USDT: {
    component: UsdtSVG,
    accentColor: 'rgb(38, 161, 123)',
    containerBackgroundColor: 'rgba(38, 161, 123, 0.1)',
    labelName: 'Tether',
  },
  USDC: {
    component: UsdcSVG,
    accentColor: 'rgb(42, 130, 224)',
    containerBackgroundColor: 'rgba(39,117,202,0.1)',
    labelName: 'USDC',
  },
} as const;

export interface PortfolioItemCardProps {
  symbol: 'BTC' | 'ETH' | 'USDC' | 'USDT';
}

export const PortfolioItemCard = ({ symbol }: PortfolioItemCardProps) => {
  const { data, isLoading } = useTokenBalances();
  if (isLoading) return <PortfolioItemCardSkeleton />;
  const token = data.find((e) => e.symbol === symbol) || {
    totalAmountUSD: 0,
    totalBalance: 0,
  };
  return (
    <div className={styles.portfolioItemCard}>
      <div
        style={{ backgroundColor: icons[symbol].containerBackgroundColor }}
        className={styles.iconContainer}
      >
        <Icon component={icons[symbol].component} />
      </div>
      <Text variant="h2" className={styles.title}>
        {icons[symbol].labelName}{' '}
        <Text style={{ color: icons[symbol].accentColor }} variant="span">
          ({symbol})
        </Text>
      </Text>
      <Text variant="span" className={styles.cryptoValue}>
        {localizedStringNumber(token.totalBalance)} <small>{symbol}</small>
      </Text>
      <Text variant="span" className={styles.dollarValue}>
        ${localizedStringNumber(token.totalAmountUSD)}
      </Text>
    </div>
  );
};
