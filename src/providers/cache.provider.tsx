/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	createContext, FC, useContext, useMemo, useState,
} from 'react';

export type TCacheContextProps = {
	cache: Map<string, any> | undefined,
	addToCache: (key: string, value: any) => void,
	getFromCache: (key: string)=> any
}

export const Cache = createContext<TCacheContextProps>(
    {} as TCacheContextProps,
);

export const CacheProvider: FC<React.PropsWithChildren> = ({ children }) => {
	const [cache, setCache] = useState(new Map<string, any>());

	const addToCache = (key: string, value: any) => {
		setCache(
			new Map<string, any>(cache.set(key, value)), // avoid memory reference error
		);
	};

	const getFromCache = (key: string) => cache.get(key);

	const value = useMemo(
		() => ({
			cache,
			addToCache,
			getFromCache,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[cache],
	);

	return <Cache.Provider value={value}>{children}</Cache.Provider>;
};

export default function useCache() {
	return useContext(Cache);
}
