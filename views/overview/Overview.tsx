'use client';
import { useState } from 'react';
import { TabItemProps, TabMenu } from '../../components/base/tabMenu';
import { OverviewHeader } from './overviewHeader/OverviewHeader';
import { TotalBalanceIndicator } from './totalBalanceIndicator/TotalBalanceIndicator';
import style from './overview.module.css';
import { OverviewPortfolio } from './overviewPortfolio/OverviewPortfolio';
import { OverviewTransfers } from './overviewTransfers/OverviewTransfers';
import { fetchWalletTransfers } from '../../utils/api';
import { useRouter } from 'next/navigation';

const menu = [
  {
    id: '1',
    label: 'Portfolio',
  },
  {
    id: '2',
    label: 'Transfers',
  },
];

const content = {
  [menu[0].id]: <OverviewPortfolio />,
  [menu[1].id]: <OverviewTransfers />,
};

export const Overview = () => {
  const [selectedTabId, setSelectedTabId] = useState<TabItemProps['id']>(
    menu[0].id
  );
  const router = useRouter();
  console.log(router);
  return (
    <>
      <OverviewHeader />
      <div className={style.navigation}>
        <TotalBalanceIndicator />
        <TabMenu
          tabs={menu}
          selectedId={selectedTabId}
          onSelectedIdChange={setSelectedTabId}
        />
      </div>
      {content[selectedTabId]}
    </>
  );
};
