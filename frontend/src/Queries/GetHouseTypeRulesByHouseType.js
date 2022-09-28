export const GetHouseTypeRulesByHouseType = async(houseType) => {
    const data = await fetch(`/datenbankabfrage/house-type-rules/${houseType}`); 
    return await data.json(); 
};