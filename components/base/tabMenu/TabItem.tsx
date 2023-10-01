import classNames from 'classnames';
import { HTMLAttributes, useCallback } from 'react';
import style from './tabItem.module.css';

export interface TabItemProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'id'> {
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
    <button
      className={classNames(style.tabItem, {
        [style.tabItemSelected]: isSelected,
      })}
      onClick={onClickHandler}
      aria-current={isSelected ? 'page' : undefined}
      role="tab"
      {...props}
    >
      {children}
    </button>
  );
};
