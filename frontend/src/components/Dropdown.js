import {React, useEffect} from 'react';
import { Select, message } from 'antd';
import 'antd/dist/antd.css';
const {Option} = Select;
// const onClick = ({ key }) => {
//   message.info(`${key}`);
//    console.log (key)
//   // chosenCountry(key)
//   // export const chosenCountry = `${key}`;
//   // SetClickedItem(key);
// };
  const Dropdown = ({children, defaultValue}) => (
      <Select defaultValue={defaultValue} >
         {children.map((curr) =>{ 
            return(        
              <Option key= '1' value = {Object.values(curr)[0]}>{Object.values(curr)[0]}</Option>
            )       
          })}
      </Select>
  );
  
  export default Dropdown;