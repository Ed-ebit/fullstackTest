import React, {useState} from 'react';

export const FetchCountries = 

    async() => {
    await (await fetch('/datenbankabfrage/bundeslaender/bundeslaender_name')).json(); 

}
// useeffect hierein