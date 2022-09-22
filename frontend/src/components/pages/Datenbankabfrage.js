import {React, useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import { Menu, message, Space, Select } from 'antd';
import 'antd/dist/antd.css';
import Dropdown from '../Dropdown';
const {Option} = Select;

function Datenbankabfrage () {
    // console.log(Dropdown.chosenCountry)
    // useEffect( () => {
    //     fetchItems();
    // }, []); 

    // const [items, setItems] = useState([]);

    // const fetchItems = async() => {
    //     const data = await fetch('/datenbankabfrage/'); // hier prog für mögliche abfragen des Dropdowns! - FE 'zieht' sich die Daten die es wünscht!
    //     const items = await data.json();
    //      console.log(data)
    //     setItems(data);
    //      console.log(items) 
    // };
    

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
          <Option value = {value[item]}>{value[item]}</Option>
          )
          })
        setItems(itemsArray)
        
    };
    console.log(items)
    return items;
//   useEffect(()=>{
//     console.log(activeKey);
//   }, [activeKey]);
//     const onClick = ({ key }) => {
//       message.info(`${key}`);
//        console.log (key)
//        setActiveKey(key);
//       // chosenCountry(key)
//       // export const chosenCountry = `${key}`;
//       // SetClickedItem(key);
//     };
//    return (
//       <Menu
//         onClick={onClick}
//        >
//         {items}
//       </Menu>
//    );
  }

    
    return (
        <section>
            <Dropdown defaultValue='Bundesalnd wählen'>
                {GetMenuItems('bundeslaender','bundeslaender_name')} 
            </Dropdown>
        </section>
    );
}

export default Datenbankabfrage;