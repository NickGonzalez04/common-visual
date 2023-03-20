import Head from "next/head";
import Image from "next/image";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Container, VStack } from '@chakra-ui/react'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageLayout from "../../components/PageLayout";
import PoolsTable from "../../components/pool/PoolsTable";
import { useFetchTopPools } from "../../hooks/useFetchTopPools";
import { useTokens } from "../../hooks/useTokens";
import TokensTable from "../../components/token/tokenTable";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { topPools, poolsLoading } = useFetchTopPools();

  const { tokens, isLoading } = useTokens();



  return (
    <>
      <Head>
        <title>Common Visualizer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        {/* <VStack> */}

          <Tabs colorScheme={"gray"}>
            <TabList>
              <Tab>Top Liquidity Pools</Tab>
              <Tab>Top Tokens</Tab>
            </TabList>
          <TabPanels>
            <TabPanel><PoolsTable topPools={topPools} poolsLoading={poolsLoading} /></TabPanel>
            <TabPanel><TokensTable tokens={tokens} isLoading={isLoading} /></TabPanel>
        </TabPanels>
        </Tabs>

      {/* </VStack> */}
    </PageLayout>
    </>
  );
}
