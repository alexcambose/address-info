import classNames from 'classnames';
import { HTMLAttributes, useCallback } from 'react';
import style from './tabItem.module.css';

export interface TabItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'id'> {
  id: string | number;
  onClick: (id: string | number) => void;
  isSelected: boolean;
}

export const TabItem = ({
  onClick,
  id,
  isSelected,
  children,
  ...props
}: TabItemProps) => {
  const onClickHandler = useCallback(() => {
    onClick(id);
  }, [onClick, id]);

  return (
    <div
      className={classNames(style.tabItem, {
        [style.tabItemSelected]: isSelected,
      })}
      onClick={onClickHandler}
      {...props}
    >
      {children}
    </div>
  );
};
