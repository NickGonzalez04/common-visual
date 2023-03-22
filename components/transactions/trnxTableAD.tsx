import { Button, Table, Spin } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { Transaction, TransactionType } from "../../types";
import { useFetchTransactions } from "../../hooks/useFetchTransactions";
import Link from "next/link";
import formatTrxTime from "../../utils/dateFormat";
import priceFormat from "../../utils/priceFormat";
import transactionFilter from "../../utils/transactionFilter";



// interface TransactionTypeData {
//     key: string;
//     index: number;
//     title: string;
//     type: string;
//     tokenValue: string;
//     tokenAmount0: string;
//     tokenAmount1: string;
//     account: string;
//     timeStamp: string;
// }


type TransactionData = {
    id: string;
    timestamp: string;
    mints: {
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
      }[];
      swaps: {
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
      }[];
      burns: {
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
      }[];
    }
 
    interface TransactionReturn {
      transaction: TransactionData[]
    }

const columns: ColumnsType<TransactionType> = [
    {
        title: '#',
        dataIndex: 'index',
        key: 'index',
        width: 50,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        align: 'center',
        width: 200,
    },
    {
        title: 'Token Value',
        dataIndex: 'amountUSD',
        key: 'amountUSD',
        align: 'right',
        width: 100,
    },
    {
        title: 'Token Amount',
        dataIndex: 'amountToken0',
        key: 'amountToken0',
        align: 'right',
        width: 100,
    },
    {
        title: 'Token Amount',
        dataIndex: 'amountToken1',
        key: 'amountToken1',
        align: 'right',
        width: 100,
    },
    {
        title: 'Account',
        dataIndex: 'sender',
        key: 'sender',
        align: 'right',
        width: 100,
    },
    {
        title: 'Time',
        dataIndex: 'timeStamp',
        key: 'timeStamp',
        align: 'right',
        width: 100,
    },


];
const TransactionsTable = ({ transactions, trnxLoading, refetchTransactions }: {
    transactions: Transaction[],
    trnxLoading?: boolean
    refetchTransaction: Function}) => {

      console.log(transactions)
const trxFiltered = transactionFilter(transactions);

  // const trxFiltered = transactions.map((trnxData: TransactionData) => {
    
  //   const mint = trnxData.mints.map((trx) => {
  //       return {
  //          type: TransactionType.MINT,
  //          hash: trx.id,
  //             timestamp: trx.timestamp,
  //             sender: trx.origin,
  //             token0Symbol: trx.pool.token0.symbol,
  //               token1Symbol: trx.pool.token1.symbol,
  //               token0Address: trx.pool.token0.id,
  //               token1Address: trx.pool.token1.id,
  //               amountToken0: trx.amount0,
  //               amountToken1: trx.amount1,
  //       }
  //     })

  //     accum = [...accum, ...mint]

  //     return accum
  //   }, []);


  // }

  // const data: TransactionData[] = [
  //   ...trxFiltered.map((transaction, index) => {
  //       console.log(transaction.swaps)
  //     return {
  //       key: `${index}`,
  //       index: index + 1,
  //       title: `${transaction.swaps}`,
  //       type: 'SWAP',
  //       tokenValue: priceFormat(transaction.swaps[0].amountUSD),
  //       tokenAmount0:
  //         Math.abs(parseFloat(transaction.swaps[0].amount0)).toFixed(2) +
  //         " ",
  //       tokenAmount1:
  //         Math.abs(parseFloat(transaction.swaps[0].amount1)).toFixed(2) +
  //         " " ,
  //       account: transaction.swaps[0].sender.substring(0,5).toLowerCase() + '...',
  //       timeStamp: formatTrxTime(transaction.swaps[0].timestamp)
  //     };
   
  //   }),
  // ];

  return (
    <div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
      <h1 style={{marginRight: 16}}>Transactions</h1>
            <div style={{ marginBottom: 16 }}>
            <Button onClick={refetchTransactions} loading={trnxLoading}>Refresh</Button>
            </div>
            </div>
      <Table 
      loading={trnxLoading} 
      columns={columns} 
      // dataSource={data}
      pagination={{ position: ["bottomCenter"] }} />
    </div>
  );
}

    export default TransactionsTable;
