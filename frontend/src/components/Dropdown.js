import {React, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
import 'antd/dist/antd.css';



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


function GetMenuItems () {
  const onClick = ({ key }) => {
    message.info(`${key}`);
     console.log (key)
    // chosenCountry(key)
    // export const chosenCountry = `${key}`;
    // SetClickedItem(key);
  };

  useEffect( () => {
      fetchItems();
  }, );

  const [items, setItems] = useState([]);

  const fetchItems = async() => {
      const data = await fetch('/datenbankabfrage/bundeslaender_name'); // hier prog für mögliche abfragen des Dropdowns! - FE 'zieht' sich die Daten die es wünscht!
      const items = await data.json();
      const itemsArray = items.map(item => 
        <Menu.Item key = {item.bundeslaender_name}>{item.bundeslaender_name}</Menu.Item>)
      // console.log(countryArray)
      setItems(itemsArray)
  };
  
 return (
    <Menu
      onClick={onClick}
     >
      {items}
    </Menu>
  );
}
  const App = () => (
    <Dropdown overlay={GetMenuItems()}>
      {/* <a onClick={(e) => e.preventDefault()}> */}
        <Space>
          Hover me, Click menu item
          <DownOutlined />
        </Space>
      {/* </a> */}
    </Dropdown>
    
  );
  
  export default App;