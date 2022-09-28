export const GetCountryRulesByCountry = async(country) =>{
    const data = await fetch(`/datenbankabfrage/country-rules/${country}`); 
    return data.json(); 
}



