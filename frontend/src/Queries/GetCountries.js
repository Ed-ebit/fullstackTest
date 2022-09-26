export const GetCountries = async() => {
    const data = await fetch('/datenbankabfrage/bundeslaender/bundeslaender_name'); 
    return await data.json(); 
};