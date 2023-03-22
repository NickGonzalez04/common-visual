
import { useState, useEffect } from 'react'
import {
  type getTokensQuery,
  getTokensDocument,
  execute
} from '../.graphclient'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useFetchTokens () {
  const [tokens, setTokens] = useState<getTokensQuery[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    execute(getTokensDocument, {})
      .then((response) => {
        setIsLoading(false)
        setTokens(response?.data.tokens)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const refetchTokens = () => {
    setIsLoading(true)
    execute(getTokensDocument, {})
      .then((response) => {
        setIsLoading(false)
        setTokens(response?.data.tokens)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return { tokens, isLoading, refetchTokens }
}
