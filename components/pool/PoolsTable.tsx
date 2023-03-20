import {
  VStack,
  Box,
  Spinner,
  Icon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Heading,
  HStack,
} from "@chakra-ui/react";
import priceFormat from "../../utils/priceFormat";
// import PoolCard from "./PoolCard";

const PoolsTable = ({ topPools, poolsLoading, refetchTopPools }: any) => {


  return (
    <Box>
    <HStack spacing={'24'}>
    <Heading>Top Pools</Heading>
    <Button 
    isLoading={poolsLoading}
    loadingText="Refreshing"
    size={'xs'} 
    onClick={refetchTopPools}>Refresh</Button>
    </HStack>
      <TableContainer display={"block"}>
        <Table variant={"striped"} colorScheme={"gray"} size={"sm"}>
          <Thead>
            <Tr>
              <Th>Pools</Th>
              <Th>TVL</Th>
              <Th>Volume 24hr</Th>
            </Tr>
          </Thead>
          
          <Tbody>
            {poolsLoading ?
            <Spinner size={'xl'} /> : topPools &&
                topPools.map((pool: any, index: number) => {
              return (
                <>
                  <Tr>
                    <Td>{pool.token0.symbol ===  "WETH" ? "ETH" : pool.token0.symbol === "WBTC" ? 'BTC': pool.token0.symbol}/{pool.token1.symbol ===  "WETH" ? "ETH" : pool.token1.symbol === "WBTC" ? 'BTC': pool.token1.symbol}</Td>
                    <Td>{priceFormat(pool.totalValueLockedUSD)}</Td>
                    <Td>{priceFormat(pool.poolDayData[0].volumeUSD)}</Td>
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

export default PoolsTable;
