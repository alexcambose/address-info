import { ReactNode } from 'react';
import { IconProvider } from './IconProvider';
import { QueryProvider } from './QueryProvider';

export interface ProvidersProps {
  children: ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <IconProvider>
      <QueryProvider>{children}</QueryProvider>
    </IconProvider>
  );
};
