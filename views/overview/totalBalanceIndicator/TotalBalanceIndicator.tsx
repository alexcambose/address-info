import { Text } from '../../../components/base/typography';
import { useAddress, useTotalBalanceUsd } from '../../../hooks';
import { localizedStringNumber } from '../../../utils/stringUtils';
import { TotalBalanceIndicatorSkeleton } from './TotalBalanceIndicatorSkeleton';
import styles from './totalBalanceIndicator.module.css';

export const TotalBalanceIndicator = () => {
  const { isLoading, data } = useTotalBalanceUsd();
  const address = useAddress();
  return (
    <div>
      <Text className={styles.totalBalanceLabel} variant="h1">
        Total Balance - {address}
      </Text>
      {isLoading ? (
        <TotalBalanceIndicatorSkeleton />
      ) : (
        <Text className={styles.totalBalanceValue} variant="span">
          ${localizedStringNumber(data)}
        </Text>
      )}
    </div>
  );
};
