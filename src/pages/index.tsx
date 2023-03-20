import Head from "next/head";
import Image from "next/image";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageLayout from "../../components/PageLayout";
import PoolsTable from "../../components/pool/PoolsTable";
import { useFetchTopPools } from "../../hooks/useFetchTopPools";
import { useTokens } from "../../hooks/useTokens";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const poolData = useFetchTopPools();
  const tokenData = useTokens();
  console.log("queried Tokens", tokenData);


  return (
    <>
      <Head>
        <title>Common Visualizer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        {/* <main className={styles.main}> */}
          <Tabs variant='enclosed'>
            <TabList>
              <Tab>Top Liquidity Pools</Tab>
              <Tab>Top Tokens</Tab>
            </TabList>
          <TabPanels>
            <TabPanel><PoolsTable topPools={poolData} /></TabPanel>
            <TabPanel>Top Tokens</TabPanel>
        </TabPanels>
        </Tabs>
        {/* </main> */}
      </PageLayout>
    </>
  );
}
