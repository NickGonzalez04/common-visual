import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { useFetchTopPools } from "../../hooks/useFetchTopPools";
import { useFetchTokens } from "../../hooks/useFetchTokens";
import { useFetchTransactions } from "../../hooks/useFetchTransactions";

import PageLayout from "../../components/pageLayout";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { topPools, poolsLoading, refetchTopPools } = useFetchTopPools();
  const { tokens, isLoading, refetchTokens } = useFetchTokens();
  const { transactions, trnxLoading, refetchTransactions } = useFetchTransactions();


  return (
    <>
      <Head>
        <title>Common Visualizer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout
        topPools={topPools}
        poolsLoading={poolsLoading}
        tokens={tokens}
        tokensLoading={isLoading}
        transactions={transactions}
        trnxLoading={trnxLoading}
        refetchTopPools={refetchTopPools}
        refetchTokens={refetchTokens}
        refetchTransactions={refetchTransactions}
      />
    </>
  );
}
