import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import {
  execute,
  TopPoolByTVLDocument,
  TopPoolByTVLQuery,
} from "../../.graphclient";
import PageLayout from "../../components/PageLayout";
import PoolsTable from "../../components/PoolsTable";
import { useFetchTopPools } from "../../hooks/useFetchTopPools";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const poolData = useFetchTopPools();

  // Test query for TopPoolByTVL
  // Returns id, liquidity
  // useEffect(() => {
  //   execute(TopPoolByTVLDocument, {}).then((res) => {
  //     // console.log(res?.data.pools.map((pool: any) => pool.liquidity))
  //     setData(res?.data.pools);
  //   });
  // }, [setData]);

  return (
    <>
      <Head>
        <title>Common Visualizer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <main className={styles.main}>
          <div className={styles.description}>
            <p>Top Liquidity Pools</p>
          </div>
          {/* <div className={styles.center}> */}
            <PoolsTable topPools={poolData} />
          {/* </div> */}
        </main>
      </PageLayout>
    </>
  );
}
