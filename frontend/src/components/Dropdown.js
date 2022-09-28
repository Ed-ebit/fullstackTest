import {React, useEffect, useState} from 'react';
import { Select, message } from 'antd';
import 'antd/dist/antd.css';
const {Option} = Select;


  const Dropdown = ({items, defaultValue, onChange}) => (
      <Select onChange = {onChange} defaultValue={defaultValue} >
          { items.map((item, index) => 
            <Select.Option key={index} value={ item.value || item.label }>
              { item.label }
            </Select.Option>
          )}
      </Select>
  );
  
  export default Dropdown;