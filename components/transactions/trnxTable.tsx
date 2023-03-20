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


  const TransactionsTable = ({ transactions }: any) => {


    return (
        <Box>
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
                                <Td>{transaction.timeStamp}</Td>
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