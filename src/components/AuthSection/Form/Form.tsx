import React, { ChangeEvent, FC, FormEvent, useCallback, useReducer, useState } from 'react';

import { InputSection } from '../../InputSection';
import { FormActions, formReducer } from './reducer';
import { FormContainer, SubmitButton } from './styled';
import { FormProps } from './types';

const initState = {
  login: '',
  password: '',
};

export const Form: FC<FormProps> = ({ authType, onSubmitClick }) => {
  const [formState, dispatch] = useReducer(formReducer, initState);

  const { login, password } = formState;
  const submitButtonTitle = authType === 'login' ? 'Войти' : 'Зарегистрироваться';

  const onFieldChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = target;

      dispatch({ type: name === 'login' ? FormActions.SET_LOGIN : FormActions.SET_PASSWORD, payload: { data: value } });
    },
    [dispatch],
  );

  const onSubmitButtonClick = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      onSubmitClick({
        authType,
        userName: login,
        password,
      });
    },
    [login, password, onSubmitClick],
  );

  return (
    <FormContainer onSubmit={onSubmitButtonClick}>
      <div>
        <InputSection label="Логин:" value={login} onChange={onFieldChange} type="text" name="login" key="login" />
        <InputSection label="Пароль:" value={password} onChange={onFieldChange} type="password" name="password" key="password" />
      </div>
      <SubmitButton title={submitButtonTitle} type="submit" />
    </FormContainer>
  );
};
