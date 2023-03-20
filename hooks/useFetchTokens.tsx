import { useState, useEffect } from 'react';
import {
   getTokensQuery, getTokensDocument, execute
} from '../.graphclient';


export function useFetchTokens() {
    const [tokens, setTokens] = useState<getTokensQuery[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
         execute(getTokensDocument, {}).then((response) => {
            setIsLoading(false);
            setTokens(response?.data.tokens);
         })
         .catch((error) => {
            console.log(error);
            });
    }, []);
    
    return {tokens, isLoading};
}

