import { FormAction, FormActions, FormState } from './types';

export const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case FormActions.SET_LOGIN: {
      const { data } = action.payload;

      return {
        ...state,
        login: data,
      };
    }

    case FormActions.SET_PASSWORD: {
      const { data } = action.payload;

      return {
        ...state,
        password: data,
      };
    }

    default: {
      return state;
    }
  }
};
