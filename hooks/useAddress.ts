import { useParams } from 'next/navigation';

export const useAddress = () => {
  const params = useParams();
  return params.address as string;
};
