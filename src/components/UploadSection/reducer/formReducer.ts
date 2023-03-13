import { FormAction, FormActions, FormState } from './types';

export const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case FormActions.SET_NAME: {
      const { data } = action.payload;

      return {
        ...state,
        name: data,
      };
    }

    case FormActions.SET_DESCRIPTION: {
      const { data } = action.payload;

      return {
        ...state,
        description: data,
      };
    }

    case FormActions.SET_FILE: {
      const { data } = action.payload;

      return {
        ...state,
        fileForm: data,
      };
    }

    default: {
      return state;
    }
  }
};
