import React, { ChangeEvent, FC, useCallback, useReducer } from 'react';

import { InputSection } from '@components/InputSection';

import { FormActions, formReducer } from './reducer';
import { UploadSectionContainer } from './styled';

const initState = { name: '', description: '' };

export const UploadSection: FC = () => {
  const [formState, dispatch] = useReducer(formReducer, initState);

  const onChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = target;

      switch (name) {
        case 'name': {
          dispatch({ type: FormActions.SET_NAME, payload: { data: value } });
        }
        case 'description': {
          dispatch({ type: FormActions.SET_DESCRIPTION, payload: { data: value } });
        }
        case 'file': {
          dispatch({ type: FormActions.SET_FILE, payload: { data: target?.files?.[0] } });
        }
      }
    },
    [dispatch],
  );

  return (
    <UploadSectionContainer>
      <div>
        <InputSection label="Название" type="text" value={formState.name} name="name" onChange={onChange} isDark />
        <InputSection
          label="Описание"
          type="text"
          value={formState.description || ''}
          name="description"
          onChange={onChange}
          isDark
        />
        <InputSection label="Файл" type="file" value={formState.fileForm} name="file" onChange={onChange} />
      </div>
    </UploadSectionContainer>
  );
};
