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



function GetMenuItems (table, item) {
  console.log(item)

  useEffect( () => {
      fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [activeKey, setActiveKey] = useState(null);

  const fetchItems = async() => {
      const data = await fetch(`/datenbankabfrage/${table}/${item}`); // hier prog für mögliche abfragen des Dropdowns! - FE 'zieht' sich die Daten die es wünscht!
      const items = await data.json();
      console.log(items)
      const itemsArray = Object.values(items).map((value) => {
        console.log(value[item]);
        return(
        <Menu.Item key = {value[item]}>{value[item]}</Menu.Item>
        )
        })
      setItems(itemsArray)
  };
useEffect(()=>{
  console.log(activeKey);
}, [activeKey]);
  const onClick = ({ key }) => {
    message.info(`${key}`);
     console.log (key)
     setActiveKey(key);
    // chosenCountry(key)
    // export const chosenCountry = `${key}`;
    // SetClickedItem(key);
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
    <Dropdown overlay={GetMenuItems(props.table, props.item)}>
      {/* <a onClick={(e) => e.preventDefault()}> */}
        <Space>
          Bitte {props.name} wählen
          <DownOutlined />
        </Space>
      {/* </a> */}
    </Dropdown>
    
  );
  
  export default App;