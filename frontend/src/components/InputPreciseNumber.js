import { InputNumber as InputPreciseNumber } from 'antd';
import React from 'react';

const onChange = (value) => {
  console.log('changed', value);
};

const inputPreciseNumber = () => (
  <inputPreciseNumber
    style={{
      width: 200,
    }}
    defaultValue="1"
    min="0"
    max="10"
    step="0.00000000000001"
    onChange={onChange}
    stringMode
  />
);

export default InputPreciseNumber;