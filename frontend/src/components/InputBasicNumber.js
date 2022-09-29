import { InputNumber as InputBasicNumber } from 'antd';
import React from 'react';


const InputNumber = ({value, onChange}) => (
<InputBasicNumber 
min={0} max={10} 
value={value} 
onChange={onChange}
/>
)

export default InputNumber;

