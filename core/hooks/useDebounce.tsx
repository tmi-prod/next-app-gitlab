import { useEffect, useRef, useState } from 'react';

const useDebounce = ({ value }: { value: Date | string | null }) => {
  const timerRef: any = useRef();
  const [debouncedValue, setDebouncedValue] = useState<any>(
    value ? new Date(value) : undefined
  );

  useEffect(() => {
    timerRef.current = setTimeout(
      () => setDebouncedValue(value ? new Date(value) : undefined),
      1000
    );

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value]);

  return [debouncedValue];
};

export default useDebounce;
