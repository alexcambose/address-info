import { useQuery } from 'react-query';
import { fetchTokenMetadata } from '../utils/api';

export const useTokenMetadata = () => {
  const { isLoading, error, data } = useQuery(
    'tokenMetadata',
    fetchTokenMetadata
  );
  return {
    isLoading,
    error,
    data,
  };
};
