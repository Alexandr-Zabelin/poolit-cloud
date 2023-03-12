import React, { FC } from 'react';

import { Ring, RingQuater } from './styled';

export const LoadingSpinner: FC = () => (
  <Ring>
    <RingQuater />
    <RingQuater />
    <RingQuater />
    <RingQuater />
  </Ring>
);
