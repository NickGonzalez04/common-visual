import { VStack } from "@chakra-ui/react"
import PoolCard from "./PoolCard";


const PoolsTable = ({topPools}) => {

    return (
        <VStack>
           {topPools.map((pool, index) => {
            return (
                <PoolCard key={index} id={pool.id} liquidity={pool.liquidity} />
           );
           })}
        </VStack>
    );
};

export default PoolsTable;