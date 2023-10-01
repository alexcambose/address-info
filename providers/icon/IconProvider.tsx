'use client';

import { IconContext } from '@phosphor-icons/react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from '../app/globals.module.css';

export const IconProvider = ({ children }: { children: ReactNode }) => {
  return (
    <IconContext.Provider
      value={{
        className: 'icon',
      }}
    >
      {children}
    </IconContext.Provider>
  );
};
