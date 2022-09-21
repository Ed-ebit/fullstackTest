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


function GetMenuItems (menu) {
  console.log(menu)
  const onClick = ({ key }) => {
    message.info(`${key}`);
     console.log (key)
    // chosenCountry(key)
    // export const chosenCountry = `${key}`;
    // SetClickedItem(key);
  };

  useEffect( () => {
      fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async() => {
      const data = await fetch(`/datenbankabfrage/${menu}`); // hier prog für mögliche abfragen des Dropdowns! - FE 'zieht' sich die Daten die es wünscht!
      const items = await data.json();
      console.log(items)
      const itemsArray = Object.values(items).map((value) => {
        console.log(value[menu]);
        return(
        <Menu.Item key = {value[menu]}>{value[menu]}</Menu.Item>
        )
      //   console.log();
        // values.map((value) =>(
        //   <Menu.Item key = {value}>{value}</Menu.Item>
        // )) -- kein array, daher kein map möglich
        
        
        })
      // const itemsArray = items.map((item) => {
        
      //    console.log(item);
        
      //   <Menu.Item key = {item[menu]}>x</Menu.Item>})
      //   console.log(itemsArray)
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
  const App = (props) => (
    <Dropdown overlay={GetMenuItems(props.menu)}>
      {/* <a onClick={(e) => e.preventDefault()}> */}
        <Space>
          Hover me, Click menu item
          <DownOutlined />
        </Space>
      {/* </a> */}
    </Dropdown>
    
  );
  
  export default App;