import React from 'react';

export const initialState = {
  'width': {
    '400': {value: 400, checked: true},
    '500': {value: 500, checked: false},
    '600': {value: 600, checked: false},
  },
  'scale': {
    'default': {value: 'default', checked: true},
    '1.5': {value: 1.5, checked: false},
    '1.8': {value: 1.8, checked: false},
  },
  'zoomPosition': {
    'default': {value: 'default', checked: true},
    'left': {value: 'left', checked: false},
    'right': {value: 'right', checked: false},
    'top': {value: 'top', checked: false},
    'bottom': {value: 'bottom', checked: false},
    'original': {value: 'original', checked: false},
  },
  'zoomWidth': {
    'default': {value: 'default', checked: true},
    '300': {value: 300, checked: false},
    '400': {value: 400, checked: false},
    '500': {value: 500, checked: false},
  },
  'zoomLensStyle': {
    'default': {value: 'default', checked: true},
    'opacity: 0.7;background-color: green': {
      value: 'opacity: 0.7;background-color: green',
      checked: false,
    },
  },
  'zoomStyle': {
    'default': {value: 'default', checked: true},
    'opacity: 0.7;background-color: grey': {
      value: 'opacity: 0.7;background-color: grey',
      checked: false,
    },
  },
  'offset': {
    'default': {value: 'default', checked: true},
    '{"vertical": 0, "horizontal": 10}': {
      value: '{"vertical": 0, "horizontal": 10}',
      checked: false,
    },
  },
};

export const UPDATE_OPTIONS = 'UPDATE_OPTIONS';

export function reducer(state, {type, payload}) {
  switch (type) {
    case UPDATE_OPTIONS:
      return {
        ...state,
        [payload.key]: {...payload.value},
      };
  }
}

export const StoreContext = React.createContext(null);
