import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

function Datenbankabfrage () {

    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/datenbankabfrage');
        const items = await data.json();
        setItems(items);
        console.log(items)
    };
    return (
        <section>
        {
            items.map( item => {
                <div>
                    <p>{item}</p>
                </div>
            })
        }
        </section>
    );
}

export default Datenbankabfrage;