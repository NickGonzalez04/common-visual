import { Card, CardHeader, CardBody, Text} from '@chakra-ui/react'

interface PoolCard {
    id: string;
    liquidity: string;
}

const PoolCard = ({id, liquidity}) => {


    return (
        <Card size={'sm'}>
            <CardBody>
            <CardHeader>Pool ID</CardHeader>
                <Text>
                    {id}
                </Text>
                <CardHeader>Liquidity</CardHeader>
                 <Text>
                    {liquidity}
                </Text>
            </CardBody>
        </Card>
    );
};



export default PoolCard;