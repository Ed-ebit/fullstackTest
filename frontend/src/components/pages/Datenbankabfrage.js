import {React, useEffect, useState } from 'react';
import {  message } from 'antd';
import 'antd/dist/antd.css';
import Dropdown from '../Dropdown';
import InputBasicNumber from '../InputBasicNumber';
import InputPreciseNumber from '../InputPreciseNumber';
import Description from '../Description';
import {GetCountries} from '../../Queries/GetCountries';
import {GetHousetypes} from '../../Queries/GetHousetypes';
import {GetHouseTypeRulesByHouseType} from '../../Queries/GetHouseTypeRulesByHouseType';
import {GetCountryRulesByCountry} from '../../Queries/GetCountryRulesByCountry';


function Datenbankabfrage () {

    const [chosenObject, setchosenObject] = useState({ country: '', houseType: ''});
    const [countries, setCountries] = useState([]);
    const [housetypes, setHousetypes] = useState([]);
    const [houseTypeRules, setHouseTypeRules] = useState({});
    const [countryRules, setCountryRules] = useState({});

    const handleOnChange = (chosenType) => (key) => {
        message.info(`${key}`);
        console.log (key)
        setchosenObject({ ...chosenObject, [chosenType]: key });
    }
    
    console.log (chosenObject)


    useEffect(() => {
       
        (async () => {
            setCountries( await GetCountries());
            setHousetypes( await GetHousetypes());
        })()
    }, [] );

    useEffect( ()=> {
        if (chosenObject.country === '') { return; }
        (async () => {
            setCountryRules( await GetCountryRulesByCountry(chosenObject.country))
        })()
    }, [chosenObject.country])

    useEffect( ()=> {
        if (chosenObject.houseType === '') { return; }
        (async () => {
            setHouseTypeRules( await GetHouseTypeRulesByHouseType(chosenObject.houseType))
        })()
    }, [chosenObject.houseType])

    
    console.log (countryRules)
    console.log (houseTypeRules)
    return (
        <section>
            <Dropdown 
                onChange={handleOnChange('country')} 
                defaultValue='Bundesland wählen' 
                items={countries.map(
                    country => ({ 
                        label: country.bundeslaender_name, 
                        value: country.bundeslaender_name 
                    })
                )}
            />

            <Description items={[
                { label: 'Bundesland', value: countryRules.bundeslaender_name || 'Bitte Bundesland wählen' },
                { label: 'Erläuterung', value: countryRules.bundeslaender_regeln || 'Bitte Bundesland wählen'},
            ]}/>
            <div>
            <p>Benötigter Anteil der GF</p>
            <InputBasicNumber value={countryRules.anteil_der_gf_numerator || 0}/>
            <span> / </span>
            <InputBasicNumber value={countryRules.anteil_der_gf_denominator || 0}/>
            </div>
            <Dropdown 
                onChange={handleOnChange('houseType')} 
                defaultValue='Haustyp wählen' 
                items={housetypes.map(
                    houseType => ({ 
                        label: houseType.haustyp_name, 
                        value: houseType.haustyp_name 
                    })
                )}
            />
            <div>
            <p>Maße Haus</p>
            <InputPreciseNumber value={countryRules.anteil_der_gf_numerator || 0}/>
            <InputPreciseNumber value={countryRules.anteil_der_gf_denominator || 0}/>
            </div>
        </section>
    );
}

export default Datenbankabfrage;