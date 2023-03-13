import React, { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import { useDebounce } from '@utils';
import { colors } from '@src/styled-config';

import { SearchProps } from './types';
import { IconContainer, SearchContainer, SearchField } from './styled';

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const debouncedUpdateContext = useDebounce((value?: string) => {
    onSearch?.(value || '');
  }, 1000);

  const onChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const { value } = target;

      debouncedUpdateContext(value);
      setSearchValue(value);
    },
    [setSearchValue, debouncedUpdateContext],
  );
  const onReset = useCallback(() => {
    debouncedUpdateContext('');
    setSearchValue('');
  }, [setSearchValue, debouncedUpdateContext]);

  return (
    <SearchContainer>
      <IconContainer>
        <SearchIcon htmlColor={colors.bgPrimary} fontSize="large" />
      </IconContainer>
      <SearchField onChange={onChange} value={searchValue} placeholder="Поиск..." type="text" aria-label="search" />
      <IconContainer>
        <IconButton onClick={onReset}>
          <ClearIcon htmlColor={colors.bgPrimary} fontSize="large" />
        </IconButton>
      </IconContainer>
    </SearchContainer>
  );
};
