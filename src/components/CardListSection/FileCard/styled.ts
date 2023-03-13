import css from '@styled-system/css';
import styled from 'styled-components';

import { colors, variants } from '@src/styled-config';
import { Button } from '@components/Button';

export const Name = styled('h3')(
  css({
    ...variants.h3Regular,
    color: colors.textPrimary,
    mb: 40,
  }),
);

export const Description = styled('p')(
  css({
    ...variants.h4Regular,
    color: colors.textPrimary,
  }),
);

export const DownloadButton = styled(Button)(
  css({
    mt: 24,
    display: 'block',
    mx: 'auto',
  }),
);

export const NameAndSizeContainer = styled('div')({
  display: 'flex',
  alignItems: 'baseline',
});

export const Size = styled('p')(
  css({
    ...variants.h4Regular,
    color: colors.textTertiary,
    ml: 16,
  }),
);

export const TextDate = styled('p')(
  css({
    ...variants.h4Regular,
    color: colors.textTertiary,
    mt: 16,
  }),
);
