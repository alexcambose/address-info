'use client';

import { ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { IconContext } from '@phosphor-icons/react';

export const IconProvider = ({ children }: { children: ReactNode }) => {
  return (
    <IconContext.Provider
      value={{
        color: 'inherit',
        className: classNames(),
      }}
    >
      {children}
    </IconContext.Provider>
  );
};
