import { Card, CardHeader, CardBody, Text} from '@chakra-ui/react'

interface PoolCard {
    id: string;
    tvl: string;
}

const PoolCard = ({id, tvl}: PoolCard) => {


    return (
        <Card size={'sm'}>
            <CardBody>
            <CardHeader>Pool ID</CardHeader>
                <Text>
                    {id}
                </Text>
                <CardHeader>TVL</CardHeader>
                 <Text>
                    {tvl}
                </Text>
            </CardBody>
        </Card>
    );
};



export default PoolCard;