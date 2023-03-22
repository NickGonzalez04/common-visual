import { Tabs, Layout } from 'antd'
import type { TabsProps } from 'antd/lib/tabs'

import OverView from './overView'
import PoolsTable from './pool/PoolTable'
import TokenTable from './token/TokenTable'

const { Header, Content, Footer } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: 36,
  color: '#fff',
  width: '100%',
  height: 142,
  paddingInline: 50,
  lineHeight: '120px',
  backgroundColor: 'rgb(31, 33, 40)'
}


const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  width: '100%',
  minHeight: 120,
  lineHeight: '120px',
  padding: '0 24%',
  marginTop: 50,
  marginBottom: 50
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: 'rgb(31, 33, 40)',
  color: '#fff'
}

const PageLayout = ({topPools, poolsLoading, refetchTopPools, tokens, tokensLoading, refetchTokens, transactions, refetchTransactions}: any) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Overview',
      children: <OverView topPools={topPools} poolsLoading={poolsLoading} refetchTopPools={refetchTopPools} tokens={tokens}  tokensLoading={tokensLoading} refetchTokens={refetchTokens} transactions={transactions} refetchTransaction={refetchTransactions}/>
    },
    {
      key: '2',
      label: 'Pools',
      children: <PoolsTable topPools={topPools} poolsLoading={poolsLoading} refetchTopPools={refetchTopPools}/>
    },
    {
      key: '3',
      label: 'Tokens',
      children: <TokenTable tokens={tokens} tokensLoading={tokensLoading} refetchTokens={refetchTokens} />
    }
  ]

  return (
        <Layout>
            <Header style={headerStyle}>Common Visualizer</Header>
            <Content style={contentStyle}>
              <Tabs defaultActiveKey='1' items={items} />
              </Content>
            <Footer style={footerStyle}>Common Visualizer ©2021 Created by Common</Footer>
        </Layout>
  )
}

export default PageLayout
