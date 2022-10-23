import { useEffect } from 'react';

const useEffectCustom = (callBack: () => void, deps?: React.DependencyList | undefined): void => {
	const dependencyList = deps || [];
	useEffect(
		() => callBack(),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		dependencyList,
	);
};

export default useEffectCustom;
