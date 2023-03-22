import { Tab, TableContainer, Table, VStack } from "@chakra-ui/react";

import PoolsTable from "./pool/PoolTable";
import TokensTable from "./token/TokenTable";
import TransactionsTable from "./transactions/trnxTableAD";

const OverView = ({
  topPools,
  poolsLoading,
  refetchTopPools,
  tokens,
  tokensLoading,
  refetchTokens,
  transactions,
  trnxLoading,
}: // refetchTransactions,
any) => {
  return (
    <div>
      <PoolsTable
        topPools={topPools}
        poolsLoading={poolsLoading}
        refetchTopPools={refetchTopPools}
      />
      <TokensTable
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
  );
};

export default OverView;
