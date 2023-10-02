'use client';
import { useState } from 'react';
import { TabItemProps, TabMenu } from '../../components/base/tabMenu';
import style from './overview.module.css';
import { OverviewHeader } from './overviewHeader/OverviewHeader';
import { OverviewPortfolio } from './overviewPortfolio/OverviewPortfolio';
import { OverviewTransfers } from './overviewTransfers/OverviewTransfers';
import { TotalBalanceIndicator } from './totalBalanceIndicator/TotalBalanceIndicator';
import { useAddress } from '../../hooks';

const menu = [
  {
    id: '1',
    label: 'Portfolio',
  },
  {
    id: '2',
    label: 'Token Transfers',
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
  const address = useAddress();
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
