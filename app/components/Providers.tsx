// components/providers.tsx
'use client';

import { ReactNode } from 'react';
import { Lightbox } from './property/Lightbox';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Lightbox />
    </>
  );
}