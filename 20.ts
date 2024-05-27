
type employType = {
    FirstName: string,
    LastName: string,
    CnicNo: number,
    GoodEmploy: boolean,
    Working: string[],
    address:AddressType, 
}
interface AddressType {
    StreetName: string,
    CityName: string,
    Country: string,
    ZipCode:string,
}
var employ ={
    FirstName: "Christofer",
    LastName: "Son",
    CnicNo: 42401-5674238-8,
    GoodEmploy: true,
    Working: ["Front-end Developer" , "Back-end Developer"],
    address:{
        StreetName: "abc Road",
        CityName: "New York",
        Country: "US",
        ZipCode:"64874"
    }
}

console.log(employ)