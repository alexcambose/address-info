import { Text } from '../../../components/base/typography';
import { useTotalBalanceUsd } from '../../../hooks';
import { localizedStringNumber } from '../../../utils/stringUtils';
import { TotalBalanceIndicatorSkeleton } from './TotalBalanceIndicatorSkeleton';
import styles from './totalBalanceIndicator.module.css';

export const TotalBalanceIndicator = () => {
  const { isLoading, data } = useTotalBalanceUsd();

  return (
    <div>
      <Text className={styles.totalBalanceLabel} variant="h3">
        Total Balance
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
