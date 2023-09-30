import { Text } from '../../../components/base/typography';
import styles from './totalBalanceIndicator.module.css';

export const TotalBalanceIndicator = () => {
  return (
    <div>
      <Text className={styles.totalBalanceLabel} variant="h3">
        Total Balance
      </Text>
      <Text className={styles.totalBalanceValue} variant="span">$123.321</Text>
    </div>
  );
};
