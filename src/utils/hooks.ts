'use client'

import {useRouter} from 'next/navigation';
import {removeTokenLocalStorage} from './helpers';
import {useTokenContext} from '../context/token';

/**
 * Returns:
 * - true if a token in a valid format is stored
 * - undefined if the application is still loading
 * - false if the token is in an invalid format
 */
const useIsLoggedIn = (): boolean | undefined => {
    const {token} = useTokenContext();
    // application is still loading
    if (token === undefined) {
        return undefined
    }

    return typeof token === 'string' ? token.length > 0 : false;
};

const useLogout = (): (() => void) => {
    const {setToken} = useTokenContext();
    const router = useRouter();

    return () => {
        removeTokenLocalStorage();
        setToken(null);
        router.push('/');
    };
};

export {useIsLoggedIn, useLogout};
