import {React, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
import 'antd/dist/antd.css';


const onClick = ({ key }) => {
  message.info(`Click on ${key}`);
};

function GetMenuCountries () {


  useEffect( () => {
      fetchCountries();
  }, []);

  const [countries, setCountries] = useState([]);

  const fetchCountries = async() => {
      const data = await fetch('/datenbankabfrage/bundeslaender_name'); // hier prog für mögliche abfragen des Dropdowns! - FE 'zieht' sich die Daten die es wünscht!
      const countries = await data.json();
      console.log(data)
      // setCountries(countries);
      // console.log(countries)
      // console.log(test)
      const countryArray = countries.map(country => country.bundeslaender_name);
      console.log(countryArray)

  };
 return (
    <Menu
      onClick={onClick}
      // items = {countries.bundeslaender_name}
      items = {countryArray}
      // items = {Object.keys(countries).map((key) => {return(
      // {[{label: countries[key], key: countries[key]},]})})} 
      
      // {countries.forEach(elements => {
      //   {label: {elements.key}}
      //   {label: {elements.key}}

      // })}
      // items={[
      //   {
      //     label: '{blKey}',
      //     key: '{blKey}',
      //   },
      //   {
      //     label: '2nd menu item',
      //     key: '2',
      //   },
      //   {
      //     label: '3rd menu item',
      //     key: '3',
      //   },
      // ]}
            // {Object.keys(countries).map((key) => {return(
      // <option key={countries[key]} value={countries[key]}>x</option>)})}
     >

    </Menu>
  );
}
  const App = () => (
    <Dropdown overlay={GetMenuCountries()}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me, Click menu item
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
  
  export default App;