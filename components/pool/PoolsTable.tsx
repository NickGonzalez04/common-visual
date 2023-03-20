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

import PoolCard from "./PoolCard";

const PoolsTable = ({ topPools }: any) => {


  const formatLiquidity = (liquidity: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(liquidity);
  };

  return (
    <VStack>
      <TableContainer>
        <Table variant="simple" size='lg'>
          <Thead>
            <Tr>
              <Th>Pools</Th>
              <Th>TVL</Th>
              <Th>Volume 24hr</Th>
            </Tr>
          </Thead>
          <Tbody>
            {topPools.map((pool: any, index: number) => {
                console.log("pool", pool)
              return (
                <>
                  <Tr>
                    <Td>{pool.id} {pool.token0.symbol ===  "WETH" ? "ETH" : pool.token0.symbol === "WBTC" ? 'BTC': pool.token0.symbol}/{pool.token1.symbol ===  "WETH" ? "ETH" : pool.token1.symbol === "WBTC" ? 'BTC': pool.token1.symbol}</Td>
                    <Td>{formatLiquidity(pool.totalValueLockedUSD)}</Td>
                    <Td>{formatLiquidity(pool.poolDayData[0].volumeUSD)}</Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default PoolsTable;
