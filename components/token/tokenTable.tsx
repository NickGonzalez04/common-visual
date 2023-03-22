import { Button, Table, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
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
        width: 200,
        render: (priceChange: number) => 
             (
                <Statistic
                    value={priceChange}
                    precision={2}
                    valueStyle={{ color: priceChange > 0 ? '#3f8600' : '#cf1322', fontSize: 14 }}
                    prefix={priceChange > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    suffix="%"
                />
            )
    },
    {
        title: 'TVL',
        dataIndex: 'tvl',
        key: 'tvl',
        align: 'right',
        width: 100,
    },
];



const TokensTable = ({ tokens, tokensLoading, refetchTokens }: any) => {


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
            <div style={{display: "flex", justifyContent: "space-between"}}>
      <h1 style={{marginRight: 16}}>Top Tokens</h1>
            <div style={{ marginBottom: 16 }}>
            <Button onClick={refetchTokens} loading={tokensLoading}>Refresh</Button>
            </div>
            </div>
        <Table
          columns={columns}
          dataSource={data}
          loading={tokensLoading}
          pagination={{ position: ["bottomCenter"] }}
        />
      </div>
    );
    }


    export default TokensTable;