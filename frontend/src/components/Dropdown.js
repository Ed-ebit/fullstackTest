import {React, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
import 'antd/dist/antd.css';


const onClick = ({ key }) => {
  message.info(`${key}`);
  // LoadClickedItem(key);
};


function GetMenuCountries () {

  useEffect( () => {
      fetchCountries();
  }, []);

  const [countries, setCountries] = useState([]);

  const fetchCountries = async() => {
      const data = await fetch('/datenbankabfrage/bundeslaender_name'); // hier prog für mögliche abfragen des Dropdowns! - FE 'zieht' sich die Daten die es wünscht!
      const countries = await data.json();
      const countryArray = countries.map(country => 
        <Menu.Item key = {country.bundeslaender_name}>{country.bundeslaender_name}</Menu.Item>)
      console.log(countryArray)
      setCountries(countryArray)
  };
  
 return (
    <Menu
      onClick={onClick}
     >
      {countries}
    </Menu>
  );
}
  const App = () => (
    <Dropdown overlay={GetMenuCountries()}>
      {/* <a onClick={(e) => e.preventDefault()}> */}
        <Space>
          Hover me, Click menu item
          <DownOutlined />
        </Space>
      {/* </a> */}
    </Dropdown>
    
  );
  
  export default App;