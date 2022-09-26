import {React, useEffect, useState} from 'react';
import { Select, message } from 'antd';
import 'antd/dist/antd.css';
import Dropdown from '../Dropdown';
import {GetCountries} from '../../Queries/GetCountries';
import {GetHousetypes} from '../../Queries/GetHousetypes';


function Datenbankabfrage () {
    
    const [countries, setCountries] = useState([]);
    const [housetypes, setHousetypes] = useState([]);
    
    useEffect(() => {
        (async () => {
            setCountries( await GetCountries());
            setHousetypes( await GetHousetypes());
        })()//wtf machen die letzten runden klammern da???
    }, [] );
    console.log(Object.keys(countries))

    return (
        <section>
            <Dropdown defaultValue='Bundesland wählen' children={countries}/>
            <Dropdown defaultValue='Haustyp wählen' children={housetypes}/>
        </section>
    );
}

export default Datenbankabfrage;