import {React, useEffect, useState} from 'react';
import { Select, message } from 'antd';
import 'antd/dist/antd.css';
const {Option} = Select;

const handleChange = (key, type) => {
  message.info(`${key}`);
  console.log (key)
  console.log (type) // id ist ein Object im gegsatz zu key? why? am namen 'id' liegts nicht...
 }



  const Dropdown = ({children, defaultValue}) => (
      <Select onChange = {handleChange} defaultValue={defaultValue} >
          {children.map((curr) =>{ 
            return(        
              <Option type={Object.keys(curr)[0]} key={Object.values(curr)[0]}/>
            )       
          })}
      </Select>
  );
  
  export default Dropdown;