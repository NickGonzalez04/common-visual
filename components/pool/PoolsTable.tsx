import {
  VStack,
  Box,
  Spinner,
 
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
import { RepeatIcon } from "@chakra-ui/icons";
import priceFormat from "../../utils/priceFormat";
// import PoolCard from "./PoolCard";

const PoolsTable = ({ topPools, poolsLoading, refetchTopPools }: any) => {


  return (
    <Box marginTop={"8"}>
    <HStack spacing={'12'} alignItems={'center'}>
    <Heading>Top Pools</Heading>
    <Button 
    isLoading={poolsLoading}
    loadingText="Refreshing"
    variant={'outline'}
    spinnerPlacement='end'
    size={'xs'} 
    onClick={refetchTopPools}>{' '}Refresh</Button>
    
    </HStack>
    <TableContainer display={"block"}>
        <Table variant={"striped"} colorScheme={"gray"} size={"sm"}>
          <Thead>
            <Tr>
              <Th>Pools</Th>
              {/* <Th>{''}</Th>
              <Td>{''}</Td>
              <Td>{''}</Td> */}
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
                    {/* <Td>{''}</Td>
                    <Td>{''}</Td>
                    <Td>{''}</Td> */}
                    <Td>{priceFormat(pool.totalValueLockedUSD)}</Td>
                    <Td>{priceFormat(pool.poolDayData[0].volumeUSD)}</Td>
                  </Tr>
                  </>
            )})}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PoolsTable;


