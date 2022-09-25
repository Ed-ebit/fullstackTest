import {React, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space, Select } from 'antd';
import 'antd/dist/antd.css';
const {Option} = Select;



// function SetClickedItem(key){
//   return(key)
// }

// const onClick = ({ key }) => {
//   message.info(`${key}`);
//    console.log (key)
//   // chosenCountry(key)
//   // export const chosenCountry = `${key}`;
//   // SetClickedItem(key);
// };
// export const chosenCountry = function SetChosenCountry(key){
//   return(`${key}`)
// }


  const App = ({children, defaultValue}) => (
      <Select defaultValue={defaultValue} >
        // Mapfunction hioer rein: was wenn ich dann mal ein Dropdown ohne Mapfunction haben will?
        {children}
      </Select>
  );
  
  export default App;