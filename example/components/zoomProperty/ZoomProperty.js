import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export function ZoomProperty({name, value}) {
  return (
    <div key={name} className='zoom_property'>
      <div className='zoom_property__key'>
        {`${name}: `}
      </div>
      <div className='zoom_property__value'>
        {value}
      </div>
    </div>
  );

}

ZoomProperty.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
