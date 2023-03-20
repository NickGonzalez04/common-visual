import {
    VStack,
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
  

  
  const TokensTable = ({ tokens }: any) => {
  
    const formatLiquidity = (liquidity: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(liquidity);
    };
  
    return (
  
        <TableContainer display={"block"}>
          <Table variant={"striped"} colorScheme={"gray"} size={"md"}>
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
                // console.log(tokens)
                return (
                  <>
                    <Tr>
                    <Td>{token.name}</Td>
                    <Td>{formatLiquidity(token.tokenDayData[0].priceUSD)}</Td>
                    <Td>{token.tokenDayData[0].open}</Td>
                      <Td>{formatLiquidity(token.totalValueLockedUSD)}</Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
  
    );
  };
  
  export default TokensTable;