import { Tab, TableContainer, Table, VStack } from "@chakra-ui/react";

import PoolsTable from "./pool/PoolTable";
import TokensTable from "./token/TokenTable";
import TransactionsTable from "./transactions/trnxTable";

const OverView = ({ topPools, poolsLoading, tokens, transactions }: any) => {

    return (
        <div>
            <PoolsTable topPools={topPools} poolsLoading={poolsLoading} />
            <TokensTable tokens={tokens} />
        </div>
    );
//   return (
//     <VStack spacing={8}>
//       <TableContainer>
//         <PoolsTable topPools={topPools} />
//         <TokensTable tokens={tokens} />
//         <TransactionsTable transactions={transactions} />

//         </TableContainer>
//     </VStack>
//   );
};

export default OverView;
