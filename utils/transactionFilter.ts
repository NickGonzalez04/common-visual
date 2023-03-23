interface Transaction {
  id: string
  timestamp: string
  mints: Mint[]
  swaps: any[]
  burns: any[]
}

interface Mint {
  id: string
  transaction: {
    id: string
  }
  token0: {
    id: string
    name: string
    symbol: string
  }
  token1: {
    id: string
    name: string
    symbol: string
  }
  sender: string
  amountUSD: string
  amount0: string
  amount1: string
}

interface Data {
  transactions: Transaction[]
}

interface Response {
  data: Data
}

interface TransactionResponse {
  type: string
  transaction: any

}

// This function is used to filter transactions based on the type of transaction executed
// Find the transaction type that is not equal to length of zero
// If the transaction type is not equal to length of zero, then return the transaction type
export default function transactionFilter (data: Data) {
  const keysWithNonEmptyArrays: TransactionResponse[] = []

  console.log('data', data)
  for (const transaction of data) {
    for (const key in transaction) {
      // console.log('key1', transaction[key]);
      if (Array.isArray(transaction[key]) && transaction[key].length > 0) {
        // console.log('key2', key);
        keysWithNonEmptyArrays.push({ key, transaction })
      }
    }
  }
  console.log('keysWithNonEmptyArrays', keysWithNonEmptyArrays)
  return keysWithNonEmptyArrays
}
