import { InputNumber } from 'antd';
import React from 'react';

const onChange = (value) => {
  console.log('changed', value);
};

const Input = () => (
<div>  
    <p>Input Name</p>
    <InputNumber
    title='default'
    style={{
      width: 200,
    }}
    defaultValue="Nix"
    min="0"
    max="1000"
    step="0.001"
    onChange={onChange}
    stringMode
  />
</div>

);

export default Input;