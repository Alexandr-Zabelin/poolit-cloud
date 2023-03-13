import React, { FC } from 'react';

import { PageLayout } from '@components/PageLayout';
import { UploadSection } from '@components/UploadSection';

export const Upload: FC = () => {
  return (
    <PageLayout title="Отправка файла">
      <UploadSection />
    </PageLayout>
  );
};
