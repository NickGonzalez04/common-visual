import { useState, useEffect } from 'react'
import {
  type getTransactionsQuery,
  getTransactionsDocument,
  execute
} from '../.graphclient'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useFetchTransactions () {
  const [transactions, setTransactions] = useState<getTransactionsQuery[]>([])
  const [trnxLoading, setTrnxLoading] = useState<boolean>(false)

  useEffect(() => {
    setTrnxLoading(true)
    execute(getTransactionsDocument, {})
      .then((response) => {
        setTrnxLoading(false)
        setTransactions(response?.data.transactions)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const refetchTransactions = () => {
    setTrnxLoading(true)
    execute(getTransactionsDocument, {})
      .then((response) => {
        setTrnxLoading(false)
        setTransactions(response?.data.transactions)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  return { transactions, trnxLoading, refetchTransactions }
}
