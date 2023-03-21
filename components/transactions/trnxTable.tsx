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
import Link from "next/link";
import formatTrxTime from "../../utils/dateFormat";
import priceFormat from "../../utils/priceFormat";

import transactionFilter from "../../utils/transactionFilter";

  const TransactionsTable = ({ transactions }: any) => {


    const filtered = transactionFilter(transactions)

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
                <Th>Type</Th>
                <Th>Total Value</Th>
                <Th>Token Amount</Th>
                <Th>Token Amount</Th>
                {/* <Th>Price</Th> */}
                <Th>Account</Th>
                <Th>Time</Th>
                </Tr>
            </Thead> 
            <Tbody>
                {filtered && filtered.map((transaction: any, index: number) => {
                    return (
                        <>
                            <Tr key={index}>
                                <Td>swap</Td>
                                <Td>{priceFormat(transaction.swaps[0].amountUSD)}</Td>
                                {/* Transaction is based on type e.g., burns, mints, swaps */}
                                <Td>{Math.abs(transaction.swaps[0].amount0).toFixed(2)} {transaction.swaps[0].token0.symbol}</Td>
                                <Td>{Math.abs(transaction.swaps[0].amount1).toFixed(2)} {transaction.swaps[0].token1.symbol}</Td>
                                <Td><Link href={`https://etherscan.io/address/${transaction.swaps[0].sender}`}>{transaction.swaps[0].sender.substring(0,5).toLowerCase()}...</Link></Td>
                                <Td>{formatTrxTime(transaction.timestamp)}</Td>
                            </Tr>
                        </>
                    )
                })}
            </Tbody>
            </Table>
        </TableContainer>
    </Box>
    )
  };

  export default TransactionsTable;