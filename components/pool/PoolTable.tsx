import { border } from "@chakra-ui/react";
import { Table, Spin } from "antd";
import type { ColumnsType } from 'antd/es/table';

// Helper Functions
import priceFormat from "../../utils/priceFormat";

interface PoolDataType {
    key: string;
    index: number;
    title: string;
    tvl: string;
    volume: string;
}

const columns: ColumnsType<PoolDataType> = [
    {
        title: '#',
        dataIndex: 'index',
        key: 'index',
        width: 50,
    },
    {
        title: 'Pool',
        dataIndex: 'pool',
        key: 'pool',
        align: 'center',
        width: 200,  
    },
    {
        title: 'TVL',
        dataIndex: 'tvl',
        key: 'tvl',
        align: 'right',
        width: 300,
    },
    {
        title: 'Volume 24hr',
        dataIndex: 'volume',
        key: 'volume',
        align: 'right',
        width: 300,
    },
];





const PoolsTable = ({ topPools, poolsLoading, refetchTopPools }: any) => {
  const data: PoolDataType[] = [
    ...topPools.map((pool: any, index: number) => {
      return {
        key: pool.id,
        index: index + 1,
        pool:
          pool.token0.symbol === "WETH"
            ? "ETH"
            : pool.token0.symbol === "WBTC"
            ? "BTC"
            : pool.token0.symbol + "/" + pool.token1.symbol === "WETH"
            ? "ETH"
            : pool.token1.symbol === "WBTC"
            ? "BTC"
            : pool.token1.symbol,
        tvl: priceFormat(pool.totalValueLockedUSD),
        volume: priceFormat(pool.poolDayData[0].volumeUSD),
      };
    }),
  ];

console.log(poolsLoading);

  return (
    <div>
      <Table
        // bordered={true}
        columns={columns}
        dataSource={data}
        loading={poolsLoading}
        pagination={{ position: ["bottomCenter"] }}
      />
    </div>
  );
};


export default PoolsTable;


