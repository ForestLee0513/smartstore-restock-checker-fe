import { useEffect, useState } from "react";
import { RecoilState, useRecoilState } from "recoil";

export function useRecoilStateWithSSR<T>(
  recoilState: RecoilState<T>,
  defaultValue: T
) {
  const [isInitial, setIsInitial] = useState(true);
  const [value, setValue] = useRecoilState(recoilState);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return [isInitial ? defaultValue : value, setValue] as const;
}
