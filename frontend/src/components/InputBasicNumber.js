import { InputNumber as InputBasicNumber } from 'antd';
import React from 'react';


const InputNumber = ({value}) => (
<InputBasicNumber min={0} max={10} defaultValue={0} value={value} />
)

export default InputNumber;

