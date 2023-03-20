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
import priceFormat from "../../utils/priceFormat";
// import PoolCard from "./PoolCard";

const PoolsTable = ({ topPools }: any) => {


  return (

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
            {topPools &&
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
  );
};

export default PoolsTable;
