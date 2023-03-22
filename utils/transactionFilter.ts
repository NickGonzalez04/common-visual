


interface Transaction {
  mints: {
    timestamp: string;
    transaction: {
      id: string;
    };
    pool: {
      token0: {
        id: string;
        symbol: string;
      };
      token1: {
        id: string;
        symbol: string;
      };
    };
    origin: string;
    amount0: string;
    amount1: string;
    amountUSD: string;
  }[];
  swaps: {
    timestamp: string;
    transaction: {
      id: string;
    };
    pool: {
      token0: {
        id: string;
        symbol: string;
      };
      token1: {
        id: string;
        symbol: string;
      };
    };
    origin: string;
    amount0: string;
    amount1: string;
    amountUSD: string;
  }[];
  burns: {
    timestamp: string;
    transaction: {
      id: string;
    };
    pool: {
      token0: {
        id: string;
        symbol: string;
      };
      token1: {
        id: string;
        symbol: string;
      };
    };
    owner: string;
    amount0: string;
    amount1: string;
    amountUSD: string;
  }[];
}

// This function is used to filter transactions based on the type of transaction executed
// Find the transaction type that is not equal to length of zero
// If the transaction type is not equal to length of zero, then return the transaction type
export default function transactionFilter(transactions: Transaction[]) {
  return transactions.map(({ mints, swaps, burns, ...rest }) => ({
    ...rest,
    ...(mints.length && { mints }),
    ...(swaps.length && { swaps }),
    ...(burns.length && { burns }),
  }));
}

