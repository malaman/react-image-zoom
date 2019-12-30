import React from 'react';
import { Option } from '../option/Option';
import './styles.scss';
import ReactImageZoom from '../../../src/react-image-zoom';
import {reducer, initialState, StoreContext} from '../../reducer';
import {ZoomProperty} from '../zoomProperty/ZoomProperty';


export function Container() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const refContainer = React.useRef(null);

  const zoomProps = {};
  Object.keys(state).forEach((key) => {
    const prop = state[key];
    Object.keys(prop).forEach(propKey => {
      if (prop[propKey].checked) {
        if (key === 'offset' && prop[propKey].value !== 'default') {
          zoomProps[key] = JSON.parse(prop[propKey].value);
        } else {
          zoomProps[key] = prop[propKey].value;
        }

      }
    });
  });
  zoomProps.img = '1.jpg';
  Object.keys(zoomProps).forEach(key => zoomProps[key] === 'default' ? delete zoomProps[key] : null);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className='container'>
        <div className='container__options'>
          {Object.keys(state).map(key => <Option key={key} name={key} options={state[key]}/>)}
        </div>
        <div className='container__used_props'>
        <div className='container__used_props_caption'>Used props:</div>
        {Object
          .keys(zoomProps)
          .map(key => <ZoomProperty key={key} name={key} value={zoomProps[key].toString()}/>)
        }
        </div>
        <div className='container__zoomed_image'>
          <ReactImageZoom ref={refContainer} {...zoomProps} />
        </div>
      </div>
    </StoreContext.Provider>
  );

}
