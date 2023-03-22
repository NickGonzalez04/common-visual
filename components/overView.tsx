import PoolsTable from './pool/PoolTable'
import TokenTable from './token/TokenTable'
import TransactionsTable from './transactions/trnxTableAD'

const OverView = ({
  topPools,
  poolsLoading,
  refetchTopPools,
  tokens,
  tokensLoading,
  refetchTokens,
  transactions,
  trnxLoading
}: // refetchTransactions,
any): JSX.Element => {
  return (
    <div>
      <PoolsTable
        topPools={topPools}
        poolsLoading={poolsLoading}
        refetchTopPools={refetchTopPools}
      />
      <TokenTable
        tokens={tokens}
        tokensLoading={tokensLoading}
        refetchTokens={refetchTokens}
      />
      <TransactionsTable
        transactions={transactions}
        trnxLoading={trnxLoading}
        // refetchTransactions={refetchTransactions}
      />
    </div>
  )
}

export default OverView
