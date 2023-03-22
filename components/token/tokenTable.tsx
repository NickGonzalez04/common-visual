import { Table, Spin } from "antd";
import type { ColumnsType } from 'antd/es/table';

import priceFormat from "../../utils/priceFormat";
import getTokenPriceChange from "../../utils/priceDifference";

interface TokenTypeData {
    key: string;
    index: number;
    title: string;
    token: string;
    price: string;
    priceChange: string;
    tvl: string;
}


const columns: ColumnsType<TokenTypeData> = [
    {
        title: '#',
        dataIndex: 'index',
        key: 'index',
        width: 50,
    },
    {
        title: 'Token',
        dataIndex: 'token',
        key: 'token',
        align: 'center',
        width: 200,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        width: 100,
    },
    {
        title: 'Price Change',
        dataIndex: 'priceChange',
        key: 'priceChange',
        align: 'right',
        width: 100,
    },
    {
        title: 'TVL',
        dataIndex: 'tvl',
        key: 'tvl',
        align: 'right',
        width: 100,
    },
];



const TokensTable = ({ tokens, isLoading, refetchTokens }: any) => {

    console.log(tokens)
    const data: TokenTypeData[] = [
        ...tokens.map((token: any, index: number) => {
            return {
                key: token.id,
                index: index + 1,
                token: token.name,
                price: priceFormat(token.tokenDayData[0].priceUSD),
                priceChange: Math.abs(getTokenPriceChange(token.tokenDayData[0].open, token.tokenDayData[0].close)).toFixed(2),
                tvl: priceFormat(token.totalValueLockedUSD),
            }
        }
        )
    ];

    return (
        <div>
        <Table
          // bordered={true}
          columns={columns}
          dataSource={data}
          loading={isLoading}
          pagination={{ position: ["bottomCenter"] }}
        />
      </div>
    );
    }


    export default TokensTable;