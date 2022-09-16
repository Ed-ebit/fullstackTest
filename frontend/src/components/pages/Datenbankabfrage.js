import {React, useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import Dropdown, {chosenCountry} from '../Dropdown';

function Datenbankabfrage () {

    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/datenbankabfrage'); // hier prog für mögliche abfragen des Dropdowns! - FE 'zieht' sich die Daten die es wünscht!
        const items = await data.json();
        // console.log(data)
        setItems(items);
        // console.log(items)
    };

    
    return (
        <section>
            <Dropdown/>
            <div>
                {Object.keys(items).map((key) => {
                    return(
                        <p>{key}: {items[key]}</p>
                    )
                })}
            </div>
        </section>
    );
}

export default Datenbankabfrage;