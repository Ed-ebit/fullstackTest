import {React, useEffect, useState, useRef} from 'react';
// import {Link} from 'react-router-dom';
import { Menu, message, Space, Select } from 'antd';
import 'antd/dist/antd.css';
import Dropdown from '../Dropdown';
import {FetchCountries} from '../../Queries/GetCountries';
const {Option} = Select;

function Datenbankabfrage () {
  
    
  
    const [countries, setCountries] = useState([]);
    // const [activeKey, setActiveKey] = useState(null);
    
    useEffect( () => {
        setCountries(async () => {await FetchCountries()});
    }, [] );
    console.log(countries)
    // const bla = async () => {await FetchCountries()};
    // console.log(countries)
    // - auch async - oder in dropdown? (nächste zeile)
    const countriesArray = Object.values(countries).map((value)  => {
        console.log(value['bundesland_name']);
        return(
        <Option value = {value['bundesland_name']}>{value['bundesland_name']}</Option>
        )
        })
    // nächste Zeile auch Async?
    setCountries(countriesArray)
     console.log(countriesArray)
  
    
    return (
        <section>
            <Dropdown defaultValue='Bundesland wählen'>
                 {countriesArray}
            </Dropdown>
        </section>
    );
}

export default Datenbankabfrage;