export const GetCountryRulesByCountry = async() => {
    const data = await fetch('/datenbankabfrage/haustyp/haustyp_name'); 
    return await data.json(); 
};