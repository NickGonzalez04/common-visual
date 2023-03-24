interface Transaction {
  id: string
  timestamp: string
  type: TransactionTypeObject[]
}

interface TransactionTypeObject {
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
  origin: string
  sender: string
  amountUSD: string
  amount0: string
  amount1: string
}

interface Data {
  transactions: Transaction[]
}

interface TransactionResponse {
  type: string
  timestamp: string
  transaction: any
}

// This function is used to filter transactions based on the type of transaction executed
// Find the transaction type that is not equal to length of zero
// If the transaction type is not equal to length of zero, then return the transaction type
export default function transactionFilter (data: Data): TransactionResponse[] {
  const keysWithNonEmptyArrays: TransactionResponse[] = []

  for (const transaction of data) {
    for (const key in transaction) {
      if (Array.isArray(transaction[key]) && transaction[key].length > 0) {
        keysWithNonEmptyArrays.push({
          type: key,
          timestamp: transaction.timestamp,
          transaction: transaction[key],
        })
      }
    }
  }

  return keysWithNonEmptyArrays
}
