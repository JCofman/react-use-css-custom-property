import * as React from 'react';

export const INIT = 'INIT';
export const ERROR = 'ERROR';
export const GET_CSS_CUSTOM_PROPERTY = 'GET_CSS_CUSTOM_PROPERTY';
export const SET_CSS_CUSTOM_PROPERTY = 'SET_CSS_CUSTOM_PROPERTY';

interface Init {
  type: typeof INIT;
}
interface Get {
  type: typeof GET_CSS_CUSTOM_PROPERTY;
  propertyValue: string;
  selectedElement: HTMLElement;
}
interface Set {
  type: typeof SET_CSS_CUSTOM_PROPERTY;
  propertyValue: string;
  selectedElement: HTMLElement;
}
interface Error {
  type: typeof ERROR;
  error: string;
}

export type useComputedStyleActionTypes = Init | Get | Set | Error;

export interface useUseComputedStyleState {
  propertyName: string;
  propertyValue: string;
  selectedElement: HTMLElement | null;
  status: 'INIT' | 'ERROR' | 'OK';
  error?: string;
}

const useUseComputedStyleReducer = (
  state: useUseComputedStyleState,
  action: useComputedStyleActionTypes
): useUseComputedStyleState => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        status: 'INIT',
      };
    case 'GET_CSS_CUSTOM_PROPERTY':
      return {
        ...state,
        status: 'OK',
        propertyValue: action.propertyValue.trim(),
        selectedElement: action.selectedElement,
      };
    case 'SET_CSS_CUSTOM_PROPERTY':
      return {
        ...state,
        propertyValue: action.propertyValue,
        status: 'OK',
      };
    case 'ERROR':
      return {
        ...state,
        propertyValue: '',
        propertyName: '',
        selectedElement: null,
        status: 'ERROR',
        error: action.error,
      };

    default:
      return state;
  }
};

const useCSSCustomProperty = (
  propertyName: string,
  query: string = ':root'
): [useUseComputedStyleState, (value: string) => void] => {
  const initialState: useUseComputedStyleState = {
    status: 'INIT',
    propertyValue: '',
    propertyName,
    selectedElement: null,
  };

  const [computedStyleState, dispatch] = React.useReducer(
    useUseComputedStyleReducer,
    initialState
  );

  const setCSSCustomProperty = (value: string) => {
    if (computedStyleState.selectedElement && computedStyleState.propertyName) {
      computedStyleState.selectedElement.style.setProperty(
        computedStyleState.propertyName,
        value
      );
      dispatch({
        type: 'SET_CSS_CUSTOM_PROPERTY',
        propertyValue: value,
        selectedElement: computedStyleState.selectedElement,
      });
    }
  };

  React.useLayoutEffect(() => {
    const selectedElement = document.querySelector(query) as HTMLElement;

    if (selectedElement) {
      const computedPropertyValue = window
        .getComputedStyle(selectedElement)
        .getPropertyValue(propertyName);

      if (computedPropertyValue) {
        dispatch({
          type: 'GET_CSS_CUSTOM_PROPERTY',
          propertyValue: computedPropertyValue,
          selectedElement,
        });
      } else {
        dispatch({
          type: 'ERROR',
          error: `No property value for ${propertyName} on element ${query} found.`,
        });
      }
    } else {
      dispatch({
        type: 'ERROR',
        error: `There is no element that matches the ${query} query.`,
      });
    }
  }, [computedStyleState.propertyValue, query]);

  return [computedStyleState, setCSSCustomProperty];
};

export default useCSSCustomProperty;
