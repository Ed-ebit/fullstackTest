import {React, useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import '../../App.css';

function Datenbankabfrage () {

    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/datenbankabfrage');
        const items = await data.json();
        console.log(data)
        setItems(items);
        console.log(items)
    };
    return (
        <section>
            <div>
                Mehe
            </div>
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