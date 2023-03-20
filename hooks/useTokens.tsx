import { useState, useEffect } from 'react';
import {
   getTokensQuery, getTokensDocument, execute
} from '../.graphclient';


export function useTokens() {
    const [tokens, setTokens] = useState<getTokensQuery[]>([]);
    
    useEffect(() => {
         execute(getTokensDocument, {}).then((response) => {;
        setTokens(response?.data.tokens);
         });
    }, []);
    
    return tokens;
}

