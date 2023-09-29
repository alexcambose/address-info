import { ReactNode } from 'react';
import { IconProvider } from './IconProvider';

export interface ProvidersProps {
  children: ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return <IconProvider>{children}</IconProvider>;
};
