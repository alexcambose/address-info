import { TransferItem, TransferItemProps } from './TransferItem';
import styles from './transferList.module.css';

export interface TransfersListProps {
  items: TransferItemProps[];
}
export const TransfersList = ({ items }: TransfersListProps) => {
  return (
    <div className={styles.transfersList}>
      {items.map((item) => (
        <TransferItem key={item.txHash} {...item} />
      ))}
    </div>
  );
};
