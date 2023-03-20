import {useState, useEffect} from 'react';
import { getTransactionsQuery, getTransactionsDocument, execute } from '../.graphclient';



export function useTransactions() {
    const [transactions, setTransactions] = useState<getTransactionsQuery[]>([]);
    const [isLoading, setTrnxLoading] = useState<boolean>(false);

    useEffect(() => {
        setTrnxLoading(true);
         execute(getTransactionsDocument, {}).then((response) => {
            setTrnxLoading(false);
            setTransactions(response?.data.transactions);
         })
         .catch((error) => {
            console.log(error);
            });
    }, []);
    
    return {transactions};
}