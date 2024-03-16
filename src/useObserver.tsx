
import { useEffect, useState } from "react";
import type { Callback, Observable } from "./observable";

export default function useObserver<T>(value: Observable<T>): T {
  const [state, setState] = useState<T>(value.get());

  useEffect(() => {
    const callback: Callback<T> = (data: T) => {
      setState(data);
    };

    value.subscribe(callback);

    return () => {
      value.unsubscribe(callback);
    };
  }, [value]);

  return state;
}
