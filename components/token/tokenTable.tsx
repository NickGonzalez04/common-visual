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
import getTokenPriceChange from "../../utils/tokenUtil";
import priceFormat from "../../utils/priceFormat";
  
  const TokensTable = ({ tokens }: any) => {
  
  
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
  
    );
  };
  
  export default TokensTable;