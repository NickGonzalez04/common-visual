import {
    VStack,
    HStack,
    Box,
    Button,
    Heading,
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
import getTokenPriceChange from "../../utils/priceDifference";
import priceFormat from "../../utils/priceFormat";
  
  const TokensTable = ({ tokens, isLoading, refetchTokens }: any) => {
  

    return (
        <Box>
        <HStack spacing={'12'} alignItems={'center'}>
        <Heading>All Tokens</Heading>
        <Button 
        isLoading={isLoading}
        loadingText="Refreshing"
        variant={'outline'}
        spinnerPlacement='end'
        size={'xs'} 
        onClick={refetchTokens}>{' '}Refresh</Button>
        
        </HStack>
        <TableContainer display={"block"}>
          <Table variant={"striped"} colorScheme={"gray"} size={"sm"}>
            <Thead>
              <Tr>
                <Th>Token</Th>
                <Th>Price</Th>
                <Th>Price Change 24hr</Th>
                <Th>TVL</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tokens.map((token: any, index: number) => {
        
                return (
                  <>
                    <Tr>
                    <Td>{token.name}</Td>
                    <Td>{priceFormat(token.tokenDayData[0].priceUSD)}</Td>
                {/* {
                    Conditional rendering for price change based on negative or positive
                } */}
                    <Td>{Math.abs(getTokenPriceChange(token.tokenDayData[0].open, token.tokenDayData[0].close)).toFixed(2)}</Td>
                      <Td>{priceFormat(token.totalValueLockedUSD)}</Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        </Box>
    );
  };
  
  export default TokensTable;