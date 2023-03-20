import PoolsTable from "./pool/PoolsTable";
import TokensTable from "./token/tokenTable";
import TransactionsTable from "./transactions/trnxTable";

const OverView = ({ topPools, tokens, transactions }: any) => {
  return (
    <>
      <PoolsTable topPools={topPools} />
      <TokensTable tokens={tokens} />
      <TransactionsTable transactions={transactions} />
    </>
  );
};

export default OverView;
