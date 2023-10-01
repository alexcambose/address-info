import Skeleton from 'react-loading-skeleton';
export interface ListItemSkeletonProps {
  count?: number;
}
export const ListItemSkeleton = ({ count = 3 }: ListItemSkeletonProps) => {
  return <Skeleton height={60} count={count} />;
};
