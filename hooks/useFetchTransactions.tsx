import {useState, useEffect} from 'react';
import { getTransactionsQuery, getTransactionsDocument, execute } from '../.graphclient';
import transactionFilter from '../utils/transactionFilter';


export function useFetchTransactions() {
    const [transactions, setTransactions] = useState<getTransactionsQuery[]>([]);
    const [trnxLoading, setTrnxLoading] = useState<boolean>(false);

    useEffect(() => {
        setTrnxLoading(true);
         execute(getTransactionsDocument, {}).then((response) => {
            // console.log("trnx", transactionFilter(response?.data.transactions));
            setTrnxLoading(false);
            setTransactions(response?.data.transactions);
         })
         .catch((error) => {
            console.log(error);
            });
    }, []);
    
    const refetchTransactions = () => {
        setTrnxLoading(true);
        execute(getTransactionsDocument, {}).then((response) => {
            setTrnxLoading(false);
            setTransactions(response?.data.transactions);
        })
        .catch((error) => {
            console.log(error);
        });
    }



    return {transactions, trnxLoading, refetchTransactions};
}