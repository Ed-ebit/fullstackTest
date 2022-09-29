import { InputNumber as InputPreciseNumber } from 'antd';
import React from 'react';



const InputNumber = ({value, onChange, max, step}) => (
  <InputPreciseNumber
    style={{
      width: 200,
    }}
    value={value}
    min="0"
    max={max || "10000"}
    step={step|| "0.0001"}
    stringMode
    onChange={onChange}
  />
);

export default InputNumber;