import {
    HStack,
    Heading,
    Box,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";


dayjs.extend(relativeTime);

  const TransactionsTable = ({ transactions }: any) => {


    // Format time to compare with current time
    const formatTrxTime = (unix: number) => {
        let now = dayjs();
        return now.diff(unix, 'seconds') < 60 ? 'Just now' : dayjs.unix(unix).fromNow();
    }

    console.log(transactions)

    return (
        <Box marginTop={"8"}>
        <HStack spacing={'12'} alignItems={'center'}>
        <Heading>Transactions</Heading>
        <Button 
        // isLoading={isLoading}
        loadingText="Refreshing"
        variant={'outline'}
        spinnerPlacement='end'
        size={'xs'} 
        >{' '}Refresh</Button>
        
        </HStack>
        <TableContainer display={"block"}>
          <Table variant={"striped"} colorScheme={"gray"} size={"sm"}>
            <Thead>
              <Tr>
                <Th>Total Value</Th>
                <Th>Token Amount</Th>
                <Th>Token Amount</Th>
                <Th>Price</Th>
                <Th>Account</Th>
                <Th>Time</Th>
                </Tr>
            </Thead> 
            <Tbody>
            {transactions && 
                transactions.map((transaction: any, index: number) => {
                    return (
                        <>
                            <Tr>
                                <Td>{transaction.totalValue}</Td>
                                {/* Transaction is based on type e.g., burns, mints, swaps */}
                                {/* <Td>{transaction.tokenAmount}</Td>
                                <Td>{transaction.tokenAmount}</Td> */}
                                <Td>{transaction.price}</Td>
                                <Td>{transaction.account}</Td>
                                <Td>{formatTrxTime(transaction.timestamp)}</Td>
                            </Tr>
                        </>
                    );
                })}
            </Tbody>
            </Table>
        </TableContainer>
        </Box>
    )
  };

  export default TransactionsTable;