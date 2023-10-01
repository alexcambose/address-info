import BigNumber from 'bignumber.js';
import { Text } from '../../../components/base/typography';
import { TransfersList } from './transferList/TransferList';
const mock = [
  {
    blockNumber: '16632006',
    timeStamp: '1676438279',
    hash: '0x21c97691ec8d31071db2c6d8f10fa818016ae0dc925af91d8fbc7ab3dee6ff98',
    nonce: '31',
    blockHash:
      '0x76fa26b75d664647f7ec852562686a21b819888dc72c504d9687fe7207e4f838',
    from: '0x178211a4ec729be004d280f1eb32fb90ea4ac614',
    contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    to: '0xb1ef81c824b954774fc315a8ed73f0ea86e37efc',
    value: '10000000000',
    tokenName: 'USDC',
    tokenSymbol: 'USDC',
    tokenDecimal: '6',
    transactionIndex: '35',
    gas: '108171',
    gasPrice: '25160005788',
    gasUsed: '107015',
    cumulativeGasUsed: '2808253',
    input: 'deprecated',
    confirmations: '1616555',
  },
  {
    blockNumber: '16634022',
    timeStamp: '1676462675',
    hash: '0xb0dcdd876c32b84a113c5e821334705f1c2f8df60142dacee9fb5d7a67132c2c',
    nonce: '0',
    blockHash:
      '0x0b6d316dd9dc4b365ac801b868e789a765fbed3c39c87ab976d5349dfe0a2665',
    from: '0xb1ef81c824b954774fc315a8ed73f0ea86e37efc',
    contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    to: '0x667e603de85eb2fcd5db1837412f9cad63c63ce5',
    value: '10000000000',
    tokenName: 'USDC',
    tokenSymbol: 'USDC',
    tokenDecimal: '6',
    transactionIndex: '92',
    gas: '99244',
    gasPrice: '37378167666',
    gasUsed: '60825',
    cumulativeGasUsed: '8965307',
    input: 'deprecated',
    confirmations: '1614539',
  },
  {
    blockNumber: '16811902',
    timeStamp: '1678623563',
    hash: '0x4f00c93e6907c64289c29a71d59fb80fa2d65301f5da5b8efd81d390c058055b',
    nonce: '146',
    blockHash:
      '0x37ed2789c08a13ec94975db3b08d78cf26875b3a65966f34e3b225402cecd472',
    from: '0x178211a4ec729be004d280f1eb32fb90ea4ac614',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    to: '0xb1ef81c824b954774fc315a8ed73f0ea86e37efc',
    value: '10000000000',
    tokenName: 'Tether USD',
    tokenSymbol: 'USDT',
    tokenDecimal: '6',
    transactionIndex: '113',
    gas: '358270',
    gasPrice: '19424761365',
    gasUsed: '356457',
    cumulativeGasUsed: '10417212',
    input: 'deprecated',
    confirmations: '1436659',
  },
  {
    blockNumber: '16812389',
    timeStamp: '1678629479',
    hash: '0x36198c80e394ebf042a4414e55ca5f924ace20371109b298941e16522fa7cfb1',
    nonce: '1',
    blockHash:
      '0x326631825d2ea684a7fe69ed86057dc2f90ee9408b3093be244e3fa74a514974',
    from: '0xb1ef81c824b954774fc315a8ed73f0ea86e37efc',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    to: '0xdb36a6b2942463909a764df721551ab7d988b24e',
    value: '10000000000',
    tokenName: 'Tether USD',
    tokenSymbol: 'USDT',
    tokenDecimal: '6',
    transactionIndex: '82',
    gas: '94813',
    gasPrice: '19349296231',
    gasUsed: '58409',
    cumulativeGasUsed: '8304937',
    input: 'deprecated',
    confirmations: '1436172',
  },
  {
    blockNumber: '17057315',
    timeStamp: '1681621871',
    hash: '0x50a50997a1bb9eef23e9c30e275ea91b0e7eadcc62c794bd1cc572884b69138d',
    nonce: '41',
    blockHash:
      '0x02f04c9f47a63f0b245e4d1dd525838f0ed2eeee1d370efe2b2588295e2e4fab',
    from: '0x178211a4ec729be004d280f1eb32fb90ea4ac614',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    to: '0xb1ef81c824b954774fc315a8ed73f0ea86e37efc',
    value: '10000000000',
    tokenName: 'Tether USD',
    tokenSymbol: 'USDT',
    tokenDecimal: '6',
    transactionIndex: '182',
    gas: '109750',
    gasPrice: '24000000000',
    gasUsed: '104599',
    cumulativeGasUsed: '20528318',
    input: 'deprecated',
    confirmations: '1191246',
  },
];
export const OverviewTransfers = () => {
  return (
    <div>
      <Text variant="h1">Transfers</Text>
      <TransfersList
        items={mock.map((e) => ({
          txHash: e.hash,
          amount: new BigNumber(e.value)
            .div(10 ** parseInt(e.tokenDecimal))
            .toFormat(2),
          to: e.to,
          from: e.from,
          type: 'DEPOSIT',
          blockNumber: 8123423,
          timestamp: parseInt(e.timeStamp),
          tokenName: e.tokenName,
          tokenSymbol: e.tokenSymbol,
        }))}
      />
    </div>
  );
};
