import { useState, useEffect } from 'react';
import {
   getTokensQuery, getTokensDocument, execute
} from '../.graphclient';


export function useTokens() {
    const [tokens, setTokens] = useState<getTokensQuery[]>([]);
    // set isLoading state

    useEffect(() => {
         execute(getTokensDocument, {}).then((response) => {;
        setTokens(response?.data.tokens);
         })
         .catch((error) => {
            console.log(error);
            });
    }, []);
    
    return tokens;
}

