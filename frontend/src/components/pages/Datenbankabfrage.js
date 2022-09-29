import {React, useEffect, useState } from 'react';
import {  message } from 'antd';
import 'antd/dist/antd.css';
import Dropdown from '../Dropdown';
import InputBasicNumber from '../InputBasicNumber';
import InputPreciseNumber from '../InputPreciseNumber';
import Description from '../Description';
import {Button} from '../Button';
import {GetCountries} from '../../Queries/GetCountries';
import {GetHousetypes} from '../../Queries/GetHousetypes';
import {GetHouseTypeRulesByHouseType} from '../../Queries/GetHouseTypeRulesByHouseType';
import {GetCountryRulesByCountry} from '../../Queries/GetCountryRulesByCountry';
import { awesomeCalc } from '../../Calculations/AwesomeCalc';


function Datenbankabfrage () {
    const [chosenObject, setchosenObject] = useState({ country: '', houseType: ''});
    const [inputValues, setInputValues] = useState({ 
        numerator: 0, 
        denominator: 0, 
        length: '', 
        width: '', 
        pitch: ''
    });
    const [countries, setCountries] = useState([]);
    const [housetypes, setHousetypes] = useState([]);
    const [houseTypeRules, setHouseTypeRules] = useState({});
    const [countryRules, setCountryRules] = useState({});
    const [results, setResults] = useState({});


    const handleOnChange = (chosenType) => (key) => {
        message.info(`${key}`);
        console.log (key)
        setchosenObject({ ...chosenObject, [chosenType]: key });
    }

    const handleInputValues = (inputType) => (key) => {
        message.info(`${key}`);
        console.log (key)
        setInputValues({ ...inputValues, [inputType]: key });
    }
    const onSubmit = () => {
        console.log (inputValues)
        console.log (Object.values(inputValues))
        console.log(awesomeCalc(Object.values(inputValues)))
        console.log(Object.keys(awesomeCalc(Object.values(inputValues))))
        setResults(awesomeCalc(Object.values(inputValues)))
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
            const rules = await GetCountryRulesByCountry(chosenObject.country);
            setCountryRules( rules );
            setInputValues({ 
                ...inputValues,
                numerator: rules.anteil_der_gf_numerator,
                denominator: rules.anteil_der_gf_denominator
            })
            // setInputValues(countryRules)// !!!!!!!!!!
        })()
    }, [chosenObject.country])

    useEffect( ()=> {
        if (chosenObject.houseType === '') { return; }
        (async () => {
            const rules = await GetHouseTypeRulesByHouseType(chosenObject.houseType)
            setHouseTypeRules( rules);
            setInputValues({ 
                ...inputValues,
                length: rules.haustyp_laenge,
                width: rules.haustyp_breite,
                pitch: rules.haustyp_dachneigung
            })
        })()
    }, [chosenObject.houseType])

    // useEffect( (inputType)=>(key) =>{
    //     setInputValues({ ...inputValues, [inputType]: key });
    // },[chosenObject.houseType]) // Versuch, den State in die Values zu laden, ohne dass OnChange getriggert wurde.
    
    console.log (inputValues)
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
            <InputBasicNumber onChange={handleInputValues('numerator')} value={inputValues.numerator}/>
            <span> / </span>
            <InputBasicNumber onChange={handleInputValues('denominator')} value={inputValues.denominator}/>
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
            <p>Maße Haus {chosenObject.houseType || '(Bitte Haustyp wählen)'}:</p>
            <span>Länge (m): </span><InputPreciseNumber onChange={handleInputValues('length')} value={inputValues.length}/>
            <span>Breite (m): </span><InputPreciseNumber onChange={handleInputValues('width')} value={inputValues.width}/>
            <span>Dachneigung : </span><InputPreciseNumber max="89" step="0.1" onChange={handleInputValues('pitch')} value={inputValues.pitch}/><span>°</span>
            </div>
            <Button onClick={onSubmit}>Berechnen</Button>
            {/* Achtung quick and dirty: */}
            <div>
                {Object.keys(results).map((key, index) => {
                    return (
                    <div key={index}>
                        <h2>
                        {key}: {results[key]}
                        </h2>

                        <hr />
                    </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Datenbankabfrage;