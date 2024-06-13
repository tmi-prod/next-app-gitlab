'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { NextStore, AppStore } from '../core/lib/store';

export default function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = NextStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
