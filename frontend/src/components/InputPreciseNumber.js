import { InputNumber as InputPreciseNumber } from 'antd';
import React from 'react';



const InputNumber = ({value}) => (
  <InputPreciseNumber
    style={{
      width: 200,
    }}
    value={value}
    defaultValue="1"
    min="0"
    max="10000"
    step="0.0001"
    stringMode
  />
);

export default InputNumber;