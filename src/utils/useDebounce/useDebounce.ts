import { useEffect, useRef } from 'react';

import { Timer } from './types';

export const useDebounce = (func: (value?: string) => void, delay: number) => {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = (value?: string) => {
    const newTimer = setTimeout(() => {
      func(value);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  };

  return debouncedFunction;
};
