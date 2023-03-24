/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { filter } from '@chakra-ui/react'
import { Button, Table, Tooltip } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'
import Link from 'next/link'

import formatTrxTime from '../utils/dateFormat'
import priceFormat from '../utils/priceFormat'
import transactionFilter from './../utils/transactionFilter'


interface TransactionTypeData {
  key: string
  index: number
  title: string
  type: string
  tokenValue: string
  tokenAmount0: string
  tokenAmount1: string
  account: string
  timeStamp: string
}

interface TransactionData {
  id: string
  timestamp: string
  mints: Array<{
    timestamp: string
    transaction: {
      id: string
    }
    pool: {
      token0: {
        id: string
        symbol: string
      }
      token1: {
        id: string
        symbol: string
      }
    }
    origin: string
    amount0: string
    amount1: string
    amountUSD: string
  }>
  swaps: Array<{
    timestamp: string
    transaction: {
      id: string
    }
    pool: {
      token0: {
        id: string
        symbol: string
      }
      token1: {
        id: string
        symbol: string
      }
    }
    origin: string
    amount0: string
    amount1: string
    amountUSD: string
  }>
  burns: Array<{
    timestamp: string
    transaction: {
      id: string
    }
    pool: {
      token0: {
        id: string
        symbol: string
      }
      token1: {
        id: string
        symbol: string
      }
    }
    owner: string
    amount0: string
    amount1: string
    amountUSD: string
  }>
}

// interface TransactionReturn {
//   transaction: TransactionData[]
// }

const columns: ColumnsType = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
    width: 100,
    filters: [
      {
        text: 'Mints',
        value: 'mints'
      },
      {
        text: 'Swaps',
        value: 'swaps'
      },
      {
        text: 'Burns',
        value: 'burns'
      }
    ],
    onFilter: (value: string, record) => record.type.includes(value)
  },
  {
    title: 'Token Value',
    dataIndex: 'amountUSD',
    key: 'amountUSD',
    align: 'right',
    width: 150
  },
  {
    title: 'Token Amount',
    dataIndex: 'amountToken0',
    key: 'amountToken0',
    align: 'right',
    width: 150
  },
  {
    title: 'Token Amount',
    dataIndex: 'amountToken1',
    key: 'amountToken1',
    align: 'right',
    width: 150
  },
  {
    title: 'Account',
    dataIndex: 'sender',
    key: 'sender',
    align: 'right',
    width: 100,
    render: (sender: string) => (
      <Tooltip>
        <Link href={`https://etherscan.io/address/${sender}`}>{sender}</Link>
      </Tooltip>
    )
  },
  {
    title: 'Time Stamp',
    dataIndex: 'timestamp',
    key: 'timestamp',
    align: 'right',
    width: 200
  }
];
const TransactionsTable = ({
  transactions,
  trnxLoading
}): JSX.Element => {

  // const onChange = (pagination, filters) => {
  //   console.log('params', pagination, filters)
  // }

  const trxFiltered = transactionFilter(transactions)

  const trx = trxFiltered.map((trnxData, index) => {
   
    return {
      type: trnxData.type,
      //  hash: trnxData.transaction[0].origin,
      amountUSD: priceFormat(trnxData.transaction[0].amountUSD),
      amountToken0:
        Math.abs(trnxData.transaction[0].amount0).toFixed(2) +
        ' ' +
        trnxData.transaction[0].token0.symbol,
      amountToken1:
        Math.abs(trnxData.transaction[0].amount1).toFixed(2) +
        ' ' +
        trnxData.transaction[0].token1.symbol,
      sender:
          `${trnxData.transaction[0].id.substring(0, 4) +
            '...' +
            trnxData.transaction[0].id.substring(38, 42).toLowerCase()}`,
      timestamp: formatTrxTime(trnxData.timestamp)
    }
  })

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ marginRight: 16 }}>Transactions</h1>
        <div style={{ marginBottom: 16 }}>
          <Button loading={trnxLoading}>Refresh</Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={trx}
        loading={trnxLoading}
        pagination={{ position: ["bottomCenter"] }}
      />
    </div>
  );
}

export default TransactionsTable
