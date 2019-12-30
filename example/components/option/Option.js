import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import {StoreContext, UPDATE_OPTIONS} from '../../reducer';

export function Option({name, options}) {

  const {dispatch} = React.useContext(StoreContext);

  const onRadioBtnChange = (e) => {
    const newOptions = {...options};
    Object.keys(newOptions).forEach((key) => {
      newOptions[key].checked = false;
    });
    newOptions[e.target.value].checked = true;
    dispatch({
      type: UPDATE_OPTIONS, payload: {
        key: name,
        value: newOptions,
      },
    });
  };

  const renderOption = ({key, value, checked}) => (
      <label key={value} className='option__property'>
        <input type="radio" id={key} name={key} value={value} checked={checked} onChange={onRadioBtnChange}/>
        <div className='option__property_caption'>{value}</div>
      </label>
  );

  return (
    <div className='option'>
      <div className='option__name'>
        {`${name}: `}
      </div>
      <div className='option__options'>
        {Object.keys(options).map((key) => renderOption(options[key]))}
      </div>
    </div>
  );

}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
};
