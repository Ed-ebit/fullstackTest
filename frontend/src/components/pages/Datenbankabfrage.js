import {React, useEffect, useState} from 'react';
import { Select, message } from 'antd';
import 'antd/dist/antd.css';
import Dropdown from '../Dropdown';
import Input from '../Input';
import Description from '../Description';
import {GetCountries} from '../../Queries/GetCountries';
import {GetHousetypes} from '../../Queries/GetHousetypes';
// import {GetCountryRule} from '../../Queries/GetCountryRule';


function Datenbankabfrage () {

    const [countries, setCountries] = useState([]);
    const [housetypes, setHousetypes] = useState([]);
    
    useEffect(() => {
        (async () => {
            setCountries( await GetCountries());
            setHousetypes( await GetHousetypes());
        })()//wtf machen die letzten runden klammern da???
    }, [] );



    return (
        <section>
            <Dropdown defaultValue='Bundesland wählen' children={countries}/>
            <Dropdown defaultValue='Haustyp wählen' children={housetypes}/>
            <Input/>
            <Description/>
        </section>
    );
}

export default Datenbankabfrage;