import { Tab, TableContainer, Table, VStack } from "@chakra-ui/react";
import PoolsTable from "./pool/PoolsTable";
import TokensTable from "./token/tokenTable";
import TransactionsTable from "./transactions/trnxTable";

const OverView = ({ topPools, tokens, transactions }: any) => {
  return (
    <VStack spacing={8}>
      <TableContainer>
        <PoolsTable topPools={topPools} />
        <TokensTable tokens={tokens} />
        <TransactionsTable transactions={transactions} />
        </TableContainer>
    </VStack>
  );
};

export default OverView;
